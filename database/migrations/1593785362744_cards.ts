import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cards extends BaseSchema {
  protected tableName = 'cards'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('card_number').notNullable()
      table.string('brand').notNullable()
      table.string('cvv').notNullable()
      table.integer('expiration_month').notNullable()
      table.integer('expiration_year').notNullable()
      table.string('card_token').notNullable()
      table.string('holder_name').notNullable()
      table.string('holder_cpf').notNullable()
      table.string('holder_birth_date').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
