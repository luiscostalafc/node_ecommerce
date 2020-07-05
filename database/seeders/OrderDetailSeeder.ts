import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OrderDetailFactory } from 'Database/factories'

export default class OrderDetailSeeder extends BaseSeeder {
  public async run () {
    OrderDetailFactory.createMany(10)
  }
}
