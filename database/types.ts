/**
 * Base interface for all administrative divisions
 */
export interface BaseRegion {
  /** SOATO identification number */
  soato_id: number
  /** Name in Uzbek (Latin) */
  name_uz: string | null
  /** Name in Uzbek (Cyrillic) */
  name_oz: string | null
  /** Name in Russian */
  name_ru: string | null
}

/**
 * Region (Viloyat) interface
 */
export interface Region extends BaseRegion {
  /** Region type identifier */
  type: "region"
}

/**
 * District/City interface
 */
export interface District extends BaseRegion {
  /** District type identifier */
  type: "district"
  /** Parent region SOATO ID */
  region_id: number
}

/**
 * Village/MFY interface
 */
export interface Village extends BaseRegion {
  /** Village type identifier */
  type: "village"
  /** Parent district SOATO ID */
  district_id: number
  /** Parent region SOATO ID */
  region_id: number
}

/**
 * Search result interface
 */
export interface SearchResult {
  item: Region | District | Village
  type: "region" | "district" | "village"
  matches: string[]
}
