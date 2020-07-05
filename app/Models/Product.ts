import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Group from './Group'
import Subgroup from './Subgroup'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public inactive: boolean

  @column()
  public group_id: number

  @column()
  public subgroup_id: number

  @hasOne(() => Group)
  public group: HasOne<typeof Group>

  @hasOne(() => Subgroup)
  public subgroup: HasOne<typeof Subgroup>
}
