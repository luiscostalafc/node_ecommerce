import BaseRepository from './BaseRepository'
import Deliveries from 'Database/migrations/1593785422906_deliveries'

export default class DeliveriesRepository extends BaseRepository{
  protected model
  constructor (model: Deliveries) {
    super()
    this.model = model
  }
}
