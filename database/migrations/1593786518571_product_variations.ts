import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Synonyms extends BaseSchema {
  protected tableName = 'product_variations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('product_variation').notNullable()

      table.integer('product_id').unsigned().notNullable()

      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
