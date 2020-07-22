import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OrderFactory } from 'Database/factories'

export default class OrderSeeder extends BaseSeeder {
  public async run () {
    await OrderFactory.createMany(10)
  }
}
