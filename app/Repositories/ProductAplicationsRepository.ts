import BaseRepository from './BaseRepository'
import ProductAplication from 'App/Models/ProductAplication'

export default class ProductAplicationsRepository extends BaseRepository{
  protected model
  constructor (model: ProductAplication) {
    super()
    this.model = model
  }
}
