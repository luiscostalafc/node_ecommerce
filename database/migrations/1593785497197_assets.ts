import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Assets extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('asset').notNullable()
      table.string('mime').notNullable()
      table.string('path').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
