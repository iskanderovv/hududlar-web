import type { Region, District, Village, SearchResult } from "./types"
import rawRegions from "../database/data/regions.json"
import rawDistricts from "../database/data/districts.json"
import rawVillages from "../database/data/villages.json"

// Normalized arrays
export const regions: Region[] = rawRegions.map((r) => ({
  ...r,
  type: "region",
}))

export const districts: District[] = rawDistricts.map((d) => ({
  ...d,
  type: "district",
}))

export const villages: Village[] = rawVillages.map((v) => ({
  ...v,
  type: "village",
  region_id: getRegionIdFromDistrictId(v.district_id),
}))

function getRegionIdFromDistrictId(districtId: number): number {
  const match = rawDistricts.find((d) => d.id === districtId)
  return match?.region_id ?? 0
}

// ====================== Public API ======================

/**
 * Get all regions (viloyat)
 */
export function getRegions(): Region[] {
  return regions
}

/**
 * Get districts/cities by region ID
 */
export function getDistricts(regionId: number): District[] {
  return districts.filter((d) => d.region_id === regionId)
}

/**
 * Get villages/MFYs by district ID
 */
export function getVillages(districtId: number): Village[] {
  return villages.filter((v) => v.district_id === districtId)
}

/**
 * Get region by SOATO ID
 */
export function getRegionById(soatoId: number): Region | undefined {
  return regions.find((r) => r.soato_id === soatoId)
}

/**
 * Get district by SOATO ID
 */
export function getDistrictById(soatoId: number): District | undefined {
  return districts.find((d) => d.soato_id === soatoId)
}

/**
 * Get village by SOATO ID
 */
export function getVillageById(soatoId: number): Village | undefined {
  return villages.find((v) => v.soato_id === soatoId)
}

/**
 * Search across all regions, districts, and villages
 */
export function search(
  query: string,
  options: {
    limit?: number
    type?: "region" | "district" | "village"
    language?: "uz" | "oz" | "ru"
  } = {}
): SearchResult[] {
  const { limit = 10, type, language } = options
  const searchQuery = query.toLowerCase()
  const results: SearchResult[] = []

  const fields = language
    ? [`name_${language}`]
    : ["name_uz", "name_oz", "name_ru"]

  const checkMatch = (
    item: Region | District | Village,
    itemType: "region" | "district" | "village"
  ) => {
    const matches = fields.filter((f) => {
      const value = (item as any)[f]?.toLowerCase()
      return value?.includes(searchQuery)
    })

    if (matches.length > 0) {
      results.push({ item, type: itemType, matches })
    }
  }

  if (!type || type === "region") regions.forEach((r) => checkMatch(r, "region"))
  if (!type || type === "district") districts.forEach((d) => checkMatch(d, "district"))
  if (!type || type === "village") villages.forEach((v) => checkMatch(v, "village"))

  return results.slice(0, limit)
}

// Re-export types
export type { Region, District, Village, SearchResult, BaseRegion } from "./types"
