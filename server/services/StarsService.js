import { dbContext } from '../db/DbContext.js'
import { BadRequest, Forbidden } from '../utils/Errors.js'

class StarsService {
  async deleteStar(Starid) {
    const star = await this.getStarById(Starid)
    await dbContext.Stars.findByIdAndDelete(Starid)
    return star
  }

  async createStar(body) {
    const star = await dbContext.Stars.create(body)
    return star
  }

  async getStarById(StarId) {
    const star = await dbContext.Stars.findById(StarId)
    if (!star) {
      throw new BadRequest('invalid Id')
    }
    return star
  }

  async getAllStars() {
    return await dbContext.Stars.find({})
  }
}

export const starsService = new StarsService()
