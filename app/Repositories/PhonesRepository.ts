import BaseRepository from './BaseRepository'
import Phone from 'App/Models/Phone'

export default class PhonesRepository extends BaseRepository{
  protected model
  constructor (model: Phone) {
    super()
    this.model = model
  }
}
