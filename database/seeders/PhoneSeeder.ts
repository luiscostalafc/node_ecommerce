import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PhoneFactory } from 'Database/factories'

export default class PhoneSeeder extends BaseSeeder {
  public async run () {
    await PhoneFactory.createMany(10)
  }
}
