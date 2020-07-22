import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ProductVariationFactory } from 'Database/factories'

export default class ProductVariationSeeder extends BaseSeeder {
  public async run () {
    await ProductVariationFactory.createMany(10)
  }
}
