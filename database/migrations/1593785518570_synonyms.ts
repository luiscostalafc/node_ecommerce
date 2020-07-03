import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Synonyms extends BaseSchema {
  protected tableName = 'synonyms'

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
