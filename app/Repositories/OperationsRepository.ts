import BaseRepository from './BaseRepository'
import Operation from 'App/Models/Operation'

export default class OperationsRepository extends BaseRepository{
  protected model
  constructor (model: Operation) {
    super()
    this.model = model
  }
}
