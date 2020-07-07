import BaseRepository from './BaseRepository'
import OrderDetail from 'App/Models/OrderDetail'

export default class OrderDetailsRepository extends BaseRepository{
  protected model
  constructor (model: OrderDetail) {
    super()
    this.model = model
  }
}
