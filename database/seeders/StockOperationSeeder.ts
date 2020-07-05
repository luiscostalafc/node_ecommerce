import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StockOperationFactory } from 'Database/factories'

export default class StockOperationSeeder extends BaseSeeder {
  public async run () {
    StockOperationFactory.createMany(10)
  }
}
