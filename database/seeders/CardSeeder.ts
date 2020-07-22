import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CardFactory } from 'Database/factories'

export default class CardSeeder extends BaseSeeder {
  public async run () {
    await CardFactory.createMany(10)
  }
}
