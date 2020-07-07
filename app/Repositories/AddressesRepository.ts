// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import BaseRepository from './BaseRepository'
import Address from 'App/Models/Address'

export default class AddressesRepository extends BaseRepository{
  protected model
  constructor (model: Address) {
    super()
    this.model = model
  }
}
