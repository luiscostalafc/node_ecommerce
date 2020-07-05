import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AssetFactory } from 'Database/factories'

export default class AssetSeeder extends BaseSeeder {
  public async run () {
    AssetFactory.createMany(10)
  }
}
