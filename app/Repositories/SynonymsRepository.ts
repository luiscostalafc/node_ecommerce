import BaseRepository from './BaseRepository'
import Synonym from 'App/Models/Synonym'

export default class SynonymsRepository extends BaseRepository{
  protected model
  constructor (model: Synonym) {
    super()
    this.model = model
  }
}
