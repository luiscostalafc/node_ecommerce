import BaseRepository from './BaseRepository'
import Order from 'App/Models/Order'

export default class OrdersRepository extends BaseRepository{
  protected model
  constructor (model: Order) {
    super()
    this.model = model
  }
}
