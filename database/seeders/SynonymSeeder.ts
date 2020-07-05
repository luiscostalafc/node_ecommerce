import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { SynonymFactory } from 'Database/factories'

export default class SynonymSeeder extends BaseSeeder {
  public async run () {
    SynonymFactory.createMany(10)
  }
}
