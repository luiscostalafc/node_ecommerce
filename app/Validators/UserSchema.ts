import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  username: schema.string(),
  password: schema.string(),
  activity: schema.string(),
  complete_name: schema.string(),
  email: schema.string({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),
  rg: schema.string(),
  cpf_cnpj: schema.string(),
  nick: schema.string(),
  is_provider: schema.boolean(),
  inactive: schema.boolean(),
})
