import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SubgroupFactory } from 'Database/factories'

export default class SubgroupSeeder extends BaseSeeder {
  public async run () {
    SubgroupFactory.createMany(10)
  }
}
