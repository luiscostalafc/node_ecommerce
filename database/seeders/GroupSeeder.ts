import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { GroupFactory } from 'Database/factories'

export default class GroupSeeder extends BaseSeeder {
  public async run () {
    await GroupFactory.createMany(10)
  }
}
