import { planetsService } from '../services/PlanetsService.js'
import BaseController from '../utils/BaseController.js'

export class PlanetsController extends BaseController {
  constructor() {
    super('api/planets')
    this.router
      .get('', this.getAllPlanets)

      .post('', this.createPlanet)
  }

  async createPlanet(req, res, next) {
    try {
      const createdPlanet = await planetsService.createPlanet(req.body)
      res.send(createdPlanet)
    } catch (error) {
      next(error)
    }
  }

  async getAllPlanets(req, res, next) {
    try {
      const planet = await planetsService.getAllPlanets()
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}
