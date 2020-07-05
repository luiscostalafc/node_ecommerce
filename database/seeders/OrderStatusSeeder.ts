import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OrderStatusFactory } from 'Database/factories'

export default class OrderStatusSeeder extends BaseSeeder {
  public async run () {
    OrderStatusFactory.createMany(10)
  }
}
