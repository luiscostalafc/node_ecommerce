import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SynonymFactory } from 'Database/factories'

export default class SynonymSeeder extends BaseSeeder {
  public async run () {
    await SynonymFactory.createMany(10)
  }
}
