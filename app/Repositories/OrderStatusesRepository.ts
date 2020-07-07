import BaseRepository from './BaseRepository'
import OrderStatus from 'App/Models/OrderStatus'

export default class OrderStatusesRepository extends BaseRepository{
  protected model
  constructor (model: OrderStatus) {
    super()
    this.model = model
  }
}
