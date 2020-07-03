import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CardHasUsers extends BaseSchema {
  protected tableName = 'card_has_users'

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
