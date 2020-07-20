import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductDescriptions extends BaseSchema {
  protected tableName = 'product_descriptions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().notNullable()
      table.string('title').notNullable()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('position').notNullable()
      table.string('system').notNullable()
      table.string('color').notNullable()
      table.string('material').notNullable()
      table.text('obs')

      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
