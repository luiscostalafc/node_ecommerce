import BaseRepository from './BaseRepository'
import Group from 'App/Models/Group'

export default class GroupsRepository extends BaseRepository{
  protected model
  constructor (model: Group) {
    super()
    this.model = model
  }
}
