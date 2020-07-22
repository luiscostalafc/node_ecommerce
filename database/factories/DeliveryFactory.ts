import Factory from '@ioc:Adonis/Lucid/Factory'
import Delivery from 'App/Models/Delivery'

export const DeliveryFactory = Factory
  .define(Delivery, ({ faker }) => {
    return ({
      delivery: faker.name.jobType(),
      inactive: faker.random.boolean(),
    })
  })
  .build()

export async function randomDeliveryId () {
  const req = await Delivery.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
