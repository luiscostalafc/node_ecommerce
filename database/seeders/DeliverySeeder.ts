import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DeliveryFactory } from 'Database/factories'

export default class DeliverySeeder extends BaseSeeder {
  public async run () {
    await DeliveryFactory.createMany(10)
  }
}
