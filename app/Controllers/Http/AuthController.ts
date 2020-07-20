import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthSchema } from 'App/Validators'

export default class AuthController {
  public async login ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: AuthSchema})
    } catch (error) {
      const msg = error.messages.errors.map(e => `${e.field} is ${e.rule}`).join(', ')
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const email = request.input('email')
    const password = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, password, {
        expiresIn: '10 days',
      })

      console.log(token)
      return response
        .safeHeader('returnType', 'success')
        .safeHeader('message', 'User logged')
        .safeHeader('contentError', '')
        .status(200)
        .json(token.toJSON())
    } catch (error) {
      console.log(error)
      if (error.code === 'E_INVALID_AUTH_UID') {
        return response
          .safeHeader('returnType', 'error')
          .safeHeader('message', 'User not found')
          .safeHeader('contentError', 'User not found')
          .status(401)
          .json({})
      }

      if (error.code === 'E_INVALID_AUTH_PASSWORD') {
        return response
          .safeHeader('returnType', 'error')
          .safeHeader('message', 'Email or password is wrong')
          .safeHeader('contentError', 'Email or password is wrong')
          .status(401)
          .json({})
      }
    }
  }

  public async logout ({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()
    return response
      .safeHeader('returnType', 'success')
      .safeHeader('message', 'User logout')
      .safeHeader('contentError', '')
      .status(200)
      .json({})
  }
}
