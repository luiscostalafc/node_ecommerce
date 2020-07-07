/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import OrdersRepository from 'App/Repositories/OrdersRepository'
import OrderValidator from 'App/Validators/OrderValidator'

export default class OrdersController {
  protected repository
  protected validator
  constructor (repository: OrdersRepository, validator: OrderValidator) {
    this.repository = repository
    this.validator = validator
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader(returnType, returnType)
      .safeHeader(message, message)
      .safeHeader(contentError, contentError)
      .status(register.status)
      .json(register.data)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: this.validator.schema})
    } catch (error) {
      response.status(422).send(error.messages)
    }

    const register = await this.repository.store(request.all)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader(returnType, returnType)
      .safeHeader(message, message)
      .safeHeader(contentError, contentError)
      .status(register.status)
      .json(register.data)
  }

  async show ({ request, response }: HttpContextContract) {
    const register = await this.repository.findById(request.id)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader(returnType, returnType)
      .safeHeader(message, message)
      .safeHeader(contentError, contentError)
      .status(register.status)
      .json(register.data)
  }

  async update ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: this.validator.schema})
    } catch (error) {
      response.status(422).send(error.messages)
    }

    const register = await this.repository.findAndUpdate(request.id, request.all)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader(returnType, returnType)
      .safeHeader(message, message)
      .safeHeader(contentError, contentError)
      .status(register.status)
      .json(register.data)
  }

  async destroy ({ request, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(request.id)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader(returnType, returnType)
      .safeHeader(message, message)
      .safeHeader(contentError, contentError)
      .status(register.status)
      .json(register.data)
  }
}
