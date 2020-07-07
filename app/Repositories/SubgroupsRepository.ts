import BaseRepository from './BaseRepository'
import Subgroup from 'App/Models/Subgroup'

export default class SubgroupsRepository extends BaseRepository{
  protected model
  constructor (model: Subgroup) {
    super()
    this.model = model
  }
}
