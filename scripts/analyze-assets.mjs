import fs from "node:fs"
import path from "node:path"

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, "public")
const sourceDirs = ["app", "components", "styles"]
const ignoredDirs = new Set(["node_modules", ".git", ".next", ".pnpm-store", "unused"])

const assetRegex = /\/[^\s"')]+?\.(png|jpe?g|webp|avif|svg)/gi

const walkFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) {
        files.push(...walkFiles(fullPath))
      }
      continue
    }
    files.push(fullPath)
  }
  return files
}

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB"]
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const value = bytes / Math.pow(1024, index)
  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`
}

const listSourceReferences = () => {
  const referenced = new Set()
  for (const dir of sourceDirs) {
    const fullDir = path.join(projectRoot, dir)
    if (!fs.existsSync(fullDir)) continue
    const files = walkFiles(fullDir)
    for (const filePath of files) {
      const content = fs.readFileSync(filePath, "utf8")
      const matches = content.match(assetRegex) || []
      for (const match of matches) {
        referenced.add(match.replace(/^\/+/, ""))
      }
    }
  }
  return referenced
}

const listPublicAssets = () => {
  if (!fs.existsSync(publicDir)) return []
  const files = walkFiles(publicDir)
  return files
    .filter((filePath) => !filePath.includes(`${path.sep}unused${path.sep}`))
    .map((filePath) => ({
      path: filePath,
      relative: path.relative(publicDir, filePath).replace(/\\/g, "/"),
      size: fs.statSync(filePath).size,
    }))
}

const listProjectSize = () => {
  const files = walkFiles(projectRoot)
  let total = 0
  for (const filePath of files) {
    total += fs.statSync(filePath).size
  }
  return total
}

const referenced = listSourceReferences()
const publicAssets = listPublicAssets()
const unused = publicAssets.filter((asset) => !referenced.has(asset.relative))
const topPublic = [...publicAssets].sort((a, b) => b.size - a.size).slice(0, 20)

console.log("Project size (all files):", formatBytes(listProjectSize()))
console.log("Public assets size:", formatBytes(publicAssets.reduce((sum, asset) => sum + asset.size, 0)))
console.log("")
console.log("Top 20 public assets:")
for (const asset of topPublic) {
  console.log(`- ${asset.relative} (${formatBytes(asset.size)})`)
}
console.log("")
console.log("Unused public assets (not referenced):")
if (unused.length === 0) {
  console.log("- none")
} else {
  for (const asset of unused) {
    console.log(`- ${asset.relative} (${formatBytes(asset.size)})`)
  }
}
