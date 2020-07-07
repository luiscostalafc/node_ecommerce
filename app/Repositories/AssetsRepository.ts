import BaseRepository from './BaseRepository'
import Asset from 'App/Models/Asset'

export default class AssetsRepository extends BaseRepository{
  protected model
  constructor (model: Asset) {
    super()
    this.model = model
  }
}
