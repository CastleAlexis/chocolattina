import fs from "node:fs"
import path from "node:path"
import sharp from "sharp"

const projectRoot = process.cwd()
const publicDir = path.join(projectRoot, "public")

const presets = {
  hero: { maxWidth: 1920, quality: 82 },
  section: { maxWidth: 1600, quality: 80 },
  featured: { maxWidth: 1200, quality: 80 },
  card: { maxWidth: 900, quality: 78 },
}

const plan = [
  { file: "la-chocolattina-hero.png", preset: "hero" },
  { file: "ensenada.png", preset: "hero" },
  { file: "cozy-cafe-coffee-chocolate-warm-atmosphere.jpg", preset: "hero" },
  { file: "cascada.png", preset: "hero" },
  { file: "chocolate-products-display-artisan-showcase.jpg", preset: "hero" },
  { file: "visitanos.png", preset: "hero" },
  { file: "chocolate-making-process-artisan-hands-crafting.jpg", preset: "section" },
  { file: "chocolattina.png", preset: "section" },
  { file: "ensenada-momento.jpg", preset: "section" },
  { file: "lugar-cafe.png", preset: "section" },
  { file: "lugar-cafe-dos.png", preset: "section" },
  { file: "petrohue.png", preset: "section" },
  { file: "mapa-chocolattina.png", preset: "section" },
  { file: "chocolate-artisan-workshop-hands-crafting-detail.jpg", preset: "section" },
  { file: "artisan-chocolate-truffles-bonbons.jpg", preset: "section" },
  { file: "alfajores-dulce-de-leche-cookies.jpg", preset: "section" },
  { file: "kuchen-cake-artisan-bakery.jpg", preset: "section" },
  { file: "artisan-jam-granola-specialty-products.jpg", preset: "section" },
  { file: "artisan-chocolate-truffles-bonbons-handmade.jpg", preset: "featured" },
  { file: "alfajores-dulce-de-leche-traditional-desserts.jpg", preset: "featured" },
  { file: "coffee-tea-kuchen-cake-cozy-cafe.jpg", preset: "featured" },
  { file: "trufas.png", preset: "card" },
  { file: "volcanes.png", preset: "card" },
  { file: "barras-bariloches.png", preset: "card" },
  { file: "alfajores.jpg", preset: "card" },
  { file: "honguito.png", preset: "card" },
  { file: "frutos-secos.png", preset: "card" },
  { file: "pistachos.png", preset: "card" },
  { file: "kucken.png", preset: "card" },
  { file: "ensenada-osorno.png", preset: "card" },
  { file: "varas-llanquihue.png", preset: "card" },
  { file: "volcan-osorno.png", preset: "card" },
]

const formatBytes = (bytes) => {
  if (bytes === 0) return "0 B"
  const units = ["B", "KB", "MB", "GB"]
  const index = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
  const value = bytes / Math.pow(1024, index)
  return `${value.toFixed(value >= 10 || index === 0 ? 0 : 1)} ${units[index]}`
}

const optimizeFile = async ({ file, preset }) => {
  const inputPath = path.join(publicDir, file)
  const { maxWidth, quality } = presets[preset]

  if (!fs.existsSync(inputPath)) {
    console.warn(`Missing input: ${file}`)
    return null
  }

  const inputStats = fs.statSync(inputPath)
  const outputPath = path.join(publicDir, file.replace(/\.(png|jpe?g)$/i, ".webp"))
  const pipeline = sharp(inputPath).resize({ width: maxWidth, withoutEnlargement: true })

  await pipeline.webp({ quality }).toFile(outputPath)

  const outputStats = fs.statSync(outputPath)
  return {
    file,
    preset,
    before: inputStats.size,
    after: outputStats.size,
    output: path.basename(outputPath),
  }
}

const run = async () => {
  const results = []
  for (const entry of plan) {
    const result = await optimizeFile(entry)
    if (result) results.push(result)
  }

  console.log("Optimized images:")
  for (const result of results) {
    const before = formatBytes(result.before)
    const after = formatBytes(result.after)
    console.log(`- ${result.file} -> ${result.output} (${before} -> ${after})`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
