import Factory from '@ioc:Adonis/Lucid/Factory'
import Subgroup from 'App/Models/Subgroup'

export const SubgroupFactory = Factory
  .define(Subgroup, ({ faker }) => {
    return ({
      subgroup: faker.lorem.word(),
    })
  })
  .build()

export const randomSubgroupId = async () => {
  const find = await Subgroup.first()
  return find?.id
}
