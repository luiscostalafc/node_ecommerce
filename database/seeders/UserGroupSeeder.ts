import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserGroupFactory } from 'Database/factories'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await UserGroupFactory.createMany(10)
  }
}
