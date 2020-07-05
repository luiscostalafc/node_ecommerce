import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductApplications extends BaseSchema {
  protected tableName = 'product_applications'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('product_id').unsigned().notNullable()
      table.string('automaker').notNullable()
      table.string('model').notNullable()
      table.integer('year_start').notNullable().defaultTo(2000)
      table.integer('year_end').notNullable()
      table.string('engine').notNullable()
      table.string('complement').notNullable()
      table.integer('quantity_used').notNullable().defaultTo(1)
      table.integer('quantity_package').notNullable().defaultTo(1)

      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
