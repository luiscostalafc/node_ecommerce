import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)

      table.integer('user_id').unsigned().notNullable()
      table.integer('provider_id').unsigned().notNullable()
      table.integer('order_status_id').unsigned().notNullable()
      table.integer('delivery_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('provider_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('order_status_id').references('id').inTable('order_statuses').onDelete('CASCADE')
      table.foreign('delivery_id').references('id').inTable('deliveries').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
