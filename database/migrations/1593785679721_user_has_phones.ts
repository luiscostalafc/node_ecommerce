import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserHasPhones extends BaseSchema {
  protected tableName = 'user_has_phones'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.integer('phone_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('phone_id').references('id').inTable('phones').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
