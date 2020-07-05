import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductDescription extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public product_id: number

  @column()
  public title: string

  @column()
  public name: string

  @column()
  public type: string

  @column()
  public position: string

  @column()
  public system: string

  @column()
  public color: string

  @column()
  public material: string

  @column()
  public obs: string

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
