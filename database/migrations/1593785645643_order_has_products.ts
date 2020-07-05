import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderHasProducts extends BaseSchema {
  protected tableName = 'order_has_products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('quantity').unsigned().notNullable()
      table.integer('amount').notNullable()
      table.integer('order_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()

      table.foreign('order_id').references('id').inTable('orders').onDelete('CASCADE')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
