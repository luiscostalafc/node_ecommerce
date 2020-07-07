import BaseRepository from './BaseRepository'
import StockOperatation from 'App/Models/StockOperatation'

export default class StockOperationsRepository extends BaseRepository{
  protected model
  constructor (model: StockOperatation) {
    super()
    this.model = model
  }
}
