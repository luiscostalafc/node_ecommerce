import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderDetails extends BaseSchema {
  protected tableName = 'order_details'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('reference').notNullable()
      table.string('payment_method').notNullable()
      table.string('order_status').notNullable()
      table.string('extra_amount').notNullable()
      table.string('intallment_quantity').notNullable()
      table.string('intallment_value').notNullable()

      table.integer('order_id').unsigned().notNullable()

      table.foreign('order_id').references('id').inTable('orders').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
