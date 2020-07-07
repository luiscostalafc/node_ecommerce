import BaseRepository from './BaseRepository'
import Permission from 'App/Models/Permission'

export default class PermissionsRepository extends BaseRepository{
  protected model
  constructor (model: Permission) {
    super()
    this.model = model
  }
}
