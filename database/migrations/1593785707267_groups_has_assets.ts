import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasAssets extends BaseSchema {
  protected tableName = 'groups_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('group_id').unsigned().notNullable()
      table.integer('asset_id').unsigned().notNullable()

      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
