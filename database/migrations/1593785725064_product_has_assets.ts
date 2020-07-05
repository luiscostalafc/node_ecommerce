import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductHasAssets extends BaseSchema {
  protected tableName = 'product_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('asset_id').unsigned().notNullable()
      table.integer('product_id').unsigned().notNullable()

      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
