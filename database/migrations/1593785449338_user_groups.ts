import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserGroups extends BaseSchema {
  protected tableName = 'user_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('group').notNullable()
      table.boolean('is_visible').notNullable().defaultTo(true)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
