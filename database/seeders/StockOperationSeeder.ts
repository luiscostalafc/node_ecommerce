import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StockOperationFactory } from 'Database/factories'

export default class StockOperationSeeder extends BaseSeeder {
  public async run () {
    await StockOperationFactory.createMany(10)
  }
}
