import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Operation from './Operation'
import Product from './Product'

export default class StockOperatation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public quantity: number

  @column()
  public unit_value: number

  @column()
  public comment: string

  @column()
  public operation_id: number

  @column()
  public product_id: number

  @hasOne(() => Operation)
  public operation: HasOne<typeof Operation>

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
