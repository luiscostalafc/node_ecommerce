import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SubgroupFactory } from 'Database/factories'

export default class SubgroupSeeder extends BaseSeeder {
  public async run () {
    await SubgroupFactory.createMany(10)
  }
}
