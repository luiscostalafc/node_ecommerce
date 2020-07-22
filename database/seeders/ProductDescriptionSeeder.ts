import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductDescriptionFactory } from 'Database/factories'

export default class ProductDescriptionSeeder extends BaseSeeder {
  public async run () {
    await ProductDescriptionFactory.createMany(10)
  }
}
