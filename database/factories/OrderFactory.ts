import Factory from '@ioc:Adonis/Lucid/Factory'
import Order from 'App/Models/Order'
import { randomUserId } from './UserFactory'
import { randomOrderStatusId } from './OrderStatusFactory'
import { randomDeliveryId } from './DeliveryFactory'

export const OrderFactory = Factory
  .define(Order, async () => ({
    user_id: await randomUserId(),
    provider_id: await randomUserId(),
    order_status_id: await randomOrderStatusId(),
    delivery_id: await randomDeliveryId(),
  }))
  .build()

export async function randomOrderId () {
  const req = await Order.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return Number(ids[Math.floor(Math.random() * ids.length)])
}
