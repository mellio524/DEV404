$ErrorActionPreference = "Stop"

$source = Resolve-Path -LiteralPath (Join-Path $PSScriptRoot "..")
$frontend = Resolve-Path -LiteralPath (Join-Path $source "Frontend")
$directories = @("app", "public", ".openai", "worker", "db", "drizzle", "scripts")
$files = @(
  "package.json",
  "package-lock.json",
  "vite.config.ts",
  "tsconfig.json",
  "next.config.ts",
  "next-env.d.ts",
  "postcss.config.mjs",
  "eslint.config.mjs",
  "drizzle.config.ts",
  "README.md"
)

foreach ($directory in $directories) {
  $target = [System.IO.Path]::GetFullPath((Join-Path $frontend $directory))
  if (-not $target.StartsWith($frontend.Path, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to clean outside Frontend: $target"
  }

  if (Test-Path -LiteralPath $target) {
    Remove-Item -LiteralPath $target -Recurse -Force
  }
}

foreach ($directory in $directories) {
  Copy-Item -LiteralPath (Join-Path $source $directory) -Destination $frontend -Recurse -Force
}

foreach ($file in $files) {
  Copy-Item -LiteralPath (Join-Path $source $file) -Destination (Join-Path $frontend $file) -Force
}
