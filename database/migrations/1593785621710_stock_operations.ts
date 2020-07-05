import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StockOperations extends BaseSchema {
  protected tableName = 'stock_operations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('quantity').unsigned().notNullable()
      table.float('unit_value').notNullable()
      table.text('comment')
      table.integer('operation_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()

      table.foreign('operation_id').references('id').inTable('operations').onDelete('CASCADE')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
