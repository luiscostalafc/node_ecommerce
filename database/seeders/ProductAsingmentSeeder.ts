import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductAsingmentFactory } from 'Database/factories'

export default class ProductAsingmentSeeder extends BaseSeeder {
  public async run () {
    await ProductAsingmentFactory.createMany(10)
  }
}
