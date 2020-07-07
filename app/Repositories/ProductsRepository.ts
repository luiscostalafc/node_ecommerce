import BaseRepository from './BaseRepository'
import Product from 'App/Models/Product'

export default class ProductsRepository extends BaseRepository{
  protected model
  constructor (model: Product) {
    super()
    this.model = model
  }
}
