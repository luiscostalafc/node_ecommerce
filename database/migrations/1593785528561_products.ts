import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('inactive').notNullable().defaultTo(false)

      table.integer('group_id').unsigned().notNullable()
      table.integer('subgroup_id').unsigned().notNullable()

      table.foreign('group_id').references('id').inTable('groups').onDelete('CASCADE')
      table.foreign('subgroup_id').references('id').inTable('subgroups').onDelete('CASCADE')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
