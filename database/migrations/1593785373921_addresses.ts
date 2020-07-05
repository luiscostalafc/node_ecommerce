import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Addresses extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cep').notNullable()
      table.string('zone').notNullable()
      table.string('state').notNullable()
      table.string('city').notNullable()
      table.string('country').notNullable()
      table.string('district').notNullable()
      table.string('street').notNullable()
      table.string('number').notNullable()
      table.string('complement').notNullable()
      table.string('delivery').notNullable()
      table.boolean('inactive').notNullable().defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
