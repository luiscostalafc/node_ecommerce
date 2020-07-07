import BaseRepository from './BaseRepository'
import ProductAsingment from 'App/Models/ProductAsingment'

export default class ProductAsingmentsRepository extends BaseRepository{
  protected model
  constructor (model: ProductAsingment) {
    super()
    this.model = model
  }
}
