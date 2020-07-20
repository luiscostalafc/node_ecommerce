import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const AuthSchema = schema.create({
  password: schema.string(),
  email: schema.string({}, [
    rules.email(),
    rules.exists({ table: 'users', column: 'email' }),
  ]),
})
