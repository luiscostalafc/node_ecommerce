import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Deliveries extends BaseSchema {
  protected tableName = 'deliveries'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('delivery').notNullable()
      table.boolean('inactive').notNullable().defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
