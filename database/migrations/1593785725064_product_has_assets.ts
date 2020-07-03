import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProductHasAssets extends BaseSchema {
  protected tableName = 'product_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
