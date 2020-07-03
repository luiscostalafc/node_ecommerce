import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderDetails extends BaseSchema {
  protected tableName = 'order_details'

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
