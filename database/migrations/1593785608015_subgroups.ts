import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Subgroups extends BaseSchema {
  protected tableName = 'subgroups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('subgroup').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
