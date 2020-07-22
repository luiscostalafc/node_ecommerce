import Factory from '@ioc:Adonis/Lucid/Factory'
import Subgroup from 'App/Models/Subgroup'

export const SubgroupFactory = Factory
  .define(Subgroup, ({ faker }) => {
    return ({
      subgroup: faker.lorem.word(),
    })
  })
  .build()

export async function randomSubgroupId () {
  const req = await Subgroup.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
