import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PermissionFactory } from 'Database/factories'

export default class PermissionSeeder extends BaseSeeder {
  public async run () {
    await PermissionFactory.createMany(10)
  }
}
