import Factory from '@ioc:Adonis/Lucid/Factory'
import Permission from 'App/Models/Permission'

export const PermissionFactory = Factory
  .define(Permission, ({ faker }) => {
    return ({
      permission: faker.lorem.words(2),
    })
  })
  .build()

export const randomPermissionId = async () => {
  const find = await Permission.first()
  return find?.id
}
