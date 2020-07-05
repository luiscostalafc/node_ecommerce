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

export const randomDeliveryId = async () => {
  const find = await Delivery.first()
  return find?.id
}
