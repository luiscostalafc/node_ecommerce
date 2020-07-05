import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('username')
      table.string('password').notNullable()
      table.string('activity').notNullable()
      table.string('complete_name').notNullable()
      table.string('email').unique().notNullable()
      table.string('rg').notNullable()
      table.string('cpf_cnpj').notNullable()
      table.string('nick')
      table.boolean('is_provider').notNullable().defaultTo(false)
      table.boolean('inactive').notNullable().defaultTo(false)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
