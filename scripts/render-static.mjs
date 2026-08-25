import { copyFile, mkdir, readdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(rootDir, "dist");
const clientDir = path.join(distDir, "client");
const serverEntry = path.join(distDir, "server", "index.js");
const siteOrigin = "https://dev-404.com";

const routes = [
  ["/", "index.html"],
  ["/music", "music/index.html"],
  ["/videos", "videos/index.html"],
  ["/about", "about/index.html"],
];

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".mp4", "video/mp4"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".xml", "application/xml; charset=utf-8"],
]);

async function copyDir(source, destination) {
  await mkdir(destination, { recursive: true });
  const entries = await readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      await copyDir(sourcePath, destinationPath);
    } else if (entry.isFile()) {
      await copyFile(sourcePath, destinationPath);
    }
  }
}

async function assetFetch(request) {
  const url = new URL(request.url);
  const assetPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
  const filePath = path.resolve(clientDir, assetPath);

  if (!filePath.startsWith(clientDir)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) {
      return new Response("Not found", { status: 404 });
    }

    const headers = new Headers();
    const contentType = contentTypes.get(path.extname(filePath).toLowerCase());
    if (contentType) {
      headers.set("content-type", contentType);
    }

    return new Response(await readFile(filePath), { headers });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}

await copyDir(clientDir, distDir);

const workerUrl = pathToFileURL(serverEntry);
workerUrl.searchParams.set("render-static", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

for (const [route, outputName] of routes) {
  const response = await worker.fetch(
    new Request(`${siteOrigin}${route}`, {
      headers: {
        accept: "text/html",
        host: "dev-404.com",
      },
    }),
    { ASSETS: { fetch: assetFetch } },
    { passThroughOnException() {}, waitUntil() {} },
  );

  if (!response.ok) {
    throw new Error(`Failed to render ${route}: ${response.status} ${response.statusText}`);
  }

  const outputPath = path.join(distDir, outputName);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, await response.text(), "utf8");
}

await writeFile(
  path.join(distDir, "_redirects"),
  ["/music /music/index.html 200", "/videos /videos/index.html 200", "/about /about/index.html 200"].join("\n") +
    "\n",
  "utf8",
);

await rm(clientDir, { force: true, recursive: true });
await rm(path.join(distDir, "server"), { force: true, recursive: true });
await rm(path.join(distDir, ".vite"), { force: true, recursive: true });

console.log("Static Render export ready in dist/");
