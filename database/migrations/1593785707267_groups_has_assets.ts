import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasAssets extends BaseSchema {
  protected tableName = 'groups_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
