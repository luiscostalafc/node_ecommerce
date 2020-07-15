/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import UsersRepository from 'App/Repositories/UsersRepository'
import { UserSchema } from 'App/Validators'

export default class UsersController {
  private readonly repository
  constructor () {
    this.repository = UsersRepository
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(register.status)
      .json(register.data)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: UserSchema})
    } catch (error) {
      const msg = error.messages.errors.map(e => `${e.field} is ${e.rule}`).join(', ')
      // console.log(error.messages.errors)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const register = await this.repository.create(request.all())
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(register.status)
      .json(register.data)
  }

  async show ({ request, response }: HttpContextContract) {
    const register = await this.repository.findById(request.id)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(register.status)
      .json(register.data)
  }

  async update ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: UserSchema})
    } catch (error) {
      const msg = error.messages.errors.map(e => `${e.field} is ${e.rule}`).join(', ')
      // console.log(error.messages.errors)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const register = await this.repository.findAndUpdate(request.id, request.all)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(register.status)
      .json(register.data)
  }

  async destroy ({ request, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(request.id)
    const { returnType, message, contentError } = register.headers
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(register.status)
      .json(register.data)
  }
}
