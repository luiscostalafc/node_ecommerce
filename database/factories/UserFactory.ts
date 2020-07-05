import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'

export const UserFactory = Factory
  .define(User, ({ faker }) => {
    return ({
      name: faker.name.findName(),
      username: faker.name.firstName(),
      password: 'secret',
      activity: faker.name.jobTitle(),
      complete_name: faker.name.findName(),
      email: faker.internet.email(),
      rg: faker.random.arrayElement(['123456789', '987654321', '123789456', '789123456']),
      cpf_cnpj: faker.random.arrayElement(['123.456.789-12', '987.654.321-98']),
      nick: faker.name.firstName(),
      is_provider: faker.random.boolean(),
      inactive: faker.random.boolean(),
    })
  })
  .build()

export const randomUserId = async () => {
  const find = await User.first()
  return find?.id
}
