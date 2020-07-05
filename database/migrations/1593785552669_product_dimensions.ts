import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductDimensions extends BaseSchema {
  protected tableName = 'product_dimensions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().notNullable()
      table.float('size').notNullable()
      table.float('height').notNullable()
      table.float('width').notNullable()
      table.float('lenth').notNullable()
      table.float('weight').notNullable()
      table.float('inner_diameter').notNullable()
      table.float('external_diameter').notNullable()

      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
