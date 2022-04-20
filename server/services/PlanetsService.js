import { dbContext } from '../db/DbContext.js'

class PlanetsService {
  async getAllPlanetsByStar(starId) {
    const planets = await dbContext.Planets.find({ starId: starId })
    return planets
  }

  async createPlanet(newPlanet) {
    const planet = await dbContext.Planets.create(newPlanet)
    return planet
  }

  async getAllPlanets() {
    const planet = await dbContext.Planets.find({})
    return planet
  }
}

export const planetsService = new PlanetsService()
