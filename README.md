# 🏛️ Hududlar

[![npm version](https://badge.fury.io/js/hududlar.svg)](https://badge.fury.io/js/hududlar)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive TypeScript library for retrieving administrative regions of Uzbekistan. Get regions (viloyat), districts (tuman), cities (shahar), and villages/MFYs with full multilingual support.

## 🚀 Features

- **100% TypeScript** - Fully typed with excellent IntelliSense support
- **Tree-shakable** - Import only what you need
- **Multilingual** - Support for Uzbek (Latin & Cyrillic), Russian, and English
- **Zero dependencies** - Lightweight and fast
- **Complete data** - All administrative divisions of Uzbekistan
- **SOATO compliant** - Uses official SOATO identification numbers

## 📦 Installation

\`\`\`bash
npm install hududlar
\`\`\`

## 🔧 Usage

\`\`\`typescript
import { getRegions, getDistricts, getVillages } from 'hududlar';

// Get all regions
const regions = getRegions();
console.log(regions[0].name_en); // "Andijan Region"

// Get districts for a specific region
const districts = getDistricts(1400000000); // Andijan region
console.log(districts[0].name_en); // "Andijan City"

// Get villages for a specific district
const villages = getVillages(1401000000); // Andijan city
console.log(villages[0].name_en); // "Bog'bon MFY"
\`\`\`

## 📚 Documentation

Visit [hududlar.dev](https://hududlar.uz) for complete documentation and examples.

## 📄 License

MIT © [Your Name]
