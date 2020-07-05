import Factory from '@ioc:Adonis/Lucid/Factory'
import Group from 'App/Models/Group'

export const GroupFactory = Factory
  .define(Group, ({ faker }) => {
    return ({
      group: faker.name.jobTitle(),
    })
  })
  .build()

export const randomGroupId = async () => {
  const find = await Group.first()
  return find?.id
}
