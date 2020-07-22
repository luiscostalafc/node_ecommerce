import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductAplicationFactory } from 'Database/factories'

export default class ProductAplicationSeeder extends BaseSeeder {
  public async run () {
    await ProductAplicationFactory.createMany(10)
  }
}
