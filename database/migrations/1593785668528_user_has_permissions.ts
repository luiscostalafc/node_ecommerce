import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserHasPermissions extends BaseSchema {
  protected tableName = 'user_has_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.integer('permission_id').unsigned().notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('permission_id').references('id').inTable('permissions').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
