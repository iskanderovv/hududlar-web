import { getRegions, getDistricts, getVillages, search } from "../index"

describe("hududlar", () => {
  describe("getRegions", () => {
    it("should return all regions", () => {
      const regions = getRegions()
      expect(regions).toHaveLength(14)
      expect(regions[0]).toHaveProperty("soato_id")
      expect(regions[0]).toHaveProperty("name_uz")
      expect(regions[0]).toHaveProperty("name_en")
      expect(regions[0]).toHaveProperty("type", "region")
    })
  })

  describe("getDistricts", () => {
    it("should return districts for a region", () => {
      const districts = getDistricts(1703) // Andijan region
      expect(districts.length).toBeGreaterThan(0)
      expect(districts[0]).toHaveProperty("region_id", 1703)
      expect(districts[0]).toHaveProperty("type", "district")
    })

    it("should return empty array for non-existent region", () => {
      const districts = getDistricts(9999)
      expect(districts).toHaveLength(0)
    })
  })

  describe("getVillages", () => {
    it("should return villages for a district", () => {
      const villages = getVillages(170301) // Andijan city
      expect(villages.length).toBeGreaterThan(0)
      expect(villages[0]).toHaveProperty("district_id", 170301)
      expect(villages[0]).toHaveProperty("type", "village")
    })
  })

  describe("search", () => {
    it("should find regions by name", () => {
      const results = search("Tashkent")
      expect(results.length).toBeGreaterThan(0)
      expect(results[0].type).toBe("region")
    })

    it("should search with language option", () => {
      const results = search("Andijon", { language: "uz" })
      expect(results.length).toBeGreaterThan(0)
    })

    it("should limit results", () => {
      const results = search("a", { limit: 2 })
      expect(results.length).toBeLessThanOrEqual(2)
    })
  })
})
