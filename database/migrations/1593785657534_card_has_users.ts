import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CardHasUsers extends BaseSchema {
  protected tableName = 'card_has_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('card_id').unsigned().notNullable()
      table.integer('user_id').unsigned().notNullable()

      table.foreign('card_id').references('id').inTable('cards').onDelete('CASCADE')
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
