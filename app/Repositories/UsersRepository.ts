import BaseRepository from './BaseRepository'
import User from 'App/Models/User'

export default class UsersRepository extends BaseRepository{
  protected model
  constructor (model: User) {
    super()
    this.model = model
  }
}
