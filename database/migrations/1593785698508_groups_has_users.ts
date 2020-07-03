import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class GroupsHasUsers extends BaseSchema {
  protected tableName = 'groups_has_users'

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
