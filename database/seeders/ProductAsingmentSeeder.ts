import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductAplicationFactory } from 'Database/factories'

export default class ProductAsingmentSeeder extends BaseSeeder {
  public async run () {
    ProductAplicationFactory.createMany(10)
  }
}
