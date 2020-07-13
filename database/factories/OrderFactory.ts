import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
// import { randomUserId } from './UserFactory'
// import { randomOrderStatusId } from './OrderStatusFactory'
// import { randomDeliveryId } from './DeliveryFactory'

export const OrderFactory = Factory
  .define(Order, () => ({
    // user_id: randomUserId,
    // provider_id: randomUserId,
    // order_status_id: randomOrderStatusId,
    // delivery_id: randomDeliveryId,
  }))
  .build()

export const randomOrderId = async () => {
  const find = await Order.first()
  return find?.id
}
