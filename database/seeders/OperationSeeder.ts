import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { OperationFactory } from 'Database/factories'

export default class OperationSeeder extends BaseSeeder {
  public async run () {
    OperationFactory.createMany(10)
  }
}
