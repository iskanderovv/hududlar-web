import fs from "fs"
import path from "path"

interface DataItem {
  soato_id: number
  name_uz: string
  name_oz: string
  name_ru: string
  name_en: string
  region_id?: number
  district_id?: number
}

function buildDataFile(inputFile: string, outputFile: string, typeName: string) {
  const inputPath = path.join("src/data", inputFile)
  const outputPath = path.join("src/data", outputFile)

  const data: DataItem[] = JSON.parse(fs.readFileSync(inputPath, "utf-8"))

  let typeAnnotation = ""
  if (typeName === "Region") {
    typeAnnotation = "Region[]"
  } else if (typeName === "District") {
    typeAnnotation = "District[]"
  } else if (typeName === "Village") {
    typeAnnotation = "Village[]"
  }

  const tsContent = `import { ${typeName} } from '../types';

export const ${typeName.toLowerCase()}s: ${typeAnnotation} = ${JSON.stringify(
    data.map((item) => ({
      ...item,
      type: typeName.toLowerCase(),
    })),
    null,
    2,
  )} as const;
`

  fs.writeFileSync(outputPath, tsContent)
  console.log(`Generated ${outputFile}`)
}

// Ensure output directory exists
const dataDir = path.join("src/data")
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Build data files
buildDataFile("regions.json", "regions.ts", "Region")
buildDataFile("districts.json", "districts.ts", "District")
buildDataFile("villages.json", "villages.ts", "Village")

console.log("Data build completed!")
