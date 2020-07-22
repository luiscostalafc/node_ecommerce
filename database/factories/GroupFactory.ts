import Factory from '@ioc:Adonis/Lucid/Factory'
import Group from 'App/Models/Group'

export const GroupFactory = Factory
  .define(Group, ({ faker }) => {
    return ({
      group: faker.name.jobTitle(),
    })
  })
  .build()

export async function randomGroupId () {
  const req = await Group.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
