import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductAplication extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public product_id: number

  @column()
  public automaker: string

  @column()
  public model: string

  @column()
  public year_start: number

  @column()
  public year_end: number

  @column()
  public engine: string

  @column()
  public complement: string

  @column()
  public quantity_used: number

  @column()
  public quantity_package: number

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
