import { planetsService } from '../services/PlanetsService.js'
import { starsService } from '../services/StarsService.js'
import BaseController from '../utils/BaseController.js'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getAllStars)
      .get('/:id', this.getStarById)
      .get('/:starId/planets', this.getAllPlanetsbyStar)
      .post('', this.createStar)
      .delete('/:id', this.deleteStar)
  }

  async getAllPlanetsbyStar(req, res, next) {
    try {
      const planets = await planetsService.getAllPlanetsByStar(req.params.starId)
      res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async deleteStar(req, res, next) {
    try {
      const car = await starsService.deleteStar(req.params.id)
      res.send(car)
    } catch (error) {
      next(error)
    }
  }

  async createStar(req, res, next) {
    try {
      const star = await starsService.createStar(req.body)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getStarById(req, res, next) {
    try {
      const star = await starsService.getStarById(req.params.id)
      res.send(star)
    } catch (error) {
      next(error)
    }
  }

  async getAllStars(req, res, next) {
    try {
      const stars = await starsService.getAllStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
