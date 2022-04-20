import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { PlanetSchema } from '../models/Planet.js'
import { StarSchema } from '../models/Star.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Stars = mongoose.model('Star', StarSchema)
  Planets = mongoose.model('Planet', PlanetSchema)
}

export const dbContext = new DbContext()
