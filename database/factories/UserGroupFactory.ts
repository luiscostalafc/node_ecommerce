import Factory from '@ioc:Adonis/Lucid/Factory'
import UserGroup from 'App/Models/UserGroup'

export const UserGroupFactory = Factory
  .define(UserGroup, ({ faker }) => {
    return ({
      group: faker.name.jobTitle(),
      is_visible: faker.random.boolean(),
    })
  })
  .build()

export const randomUserGroupId = async () => {
  const find = await UserGroup.first()
  return find?.id
}
