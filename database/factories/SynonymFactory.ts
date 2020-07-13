import Factory from '@ioc:Adonis/Lucid/Factory'
import Synonym from 'App/Models/Synonym'
// import { randomProductId } from './ProductFactoryFactory'

export const SynonymFactory = Factory
  .define(Synonym, ({ faker }) => ({
    synonym: faker.lorem.word(),
    // product_id: randomProductId,
  }))
  .build()

export const randomSynonymId = async () => {
  const find = await Synonym.first()
  return find?.id
}
