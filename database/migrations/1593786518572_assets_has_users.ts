import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AssetsHasUsers extends BaseSchema {
  protected tableName = 'assets_has_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('asset_id').unsigned().notNullable()
      table.integer('user_id').unsigned().notNullable()

      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
