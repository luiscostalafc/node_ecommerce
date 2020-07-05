import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductAsingments extends BaseSchema {
  protected tableName = 'product_asingments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_asingment')
      table.integer('product_id').unsigned().notNullable()

      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
