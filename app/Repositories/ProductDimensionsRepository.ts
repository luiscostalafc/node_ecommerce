import BaseRepository from './BaseRepository'
import ProductDimension from 'App/Models/ProductDimension'

export default class ProductDimensionsRepository extends BaseRepository{
  protected model
  constructor (model: ProductDimension) {
    super()
    this.model = model
  }
}
