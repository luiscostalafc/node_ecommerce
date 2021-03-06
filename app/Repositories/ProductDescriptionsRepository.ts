/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Logger from '@ioc:Adonis/Core/Logger'

import { first, all, create, findAndUpdate, find, createOrUpdate, findAndDelete } from '../Services/CRUD'
import ProductDescription from 'App/Models/ProductDescription'

class ProductDescriptionsRepository {
  protected model: any
  protected obj = []
  protected contentError = []
  protected returnMsg = ''
  protected statusCode = 400
  protected options = 0

  public logError (func, error) {
    Logger.warn(`Repository ${func} Error: ${error}`)
  }

  constructor () {
    this.model = ProductDescription
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async create (data: any) {
    return await create(this.model, data)
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.model, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new ProductDescriptionsRepository()
