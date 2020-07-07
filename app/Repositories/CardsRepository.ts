import BaseRepository from './BaseRepository'
import Card from 'App/Models/Card'

export default class CardsRepository extends BaseRepository{
  protected model
  constructor (model: Card) {
    super()
    this.model = model
  }
}
