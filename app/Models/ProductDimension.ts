import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class ProductDimension extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public product_id: number

  @column()
  public size: number

  @column()
  public height: number

  @column()
  public width: number

  @column()
  public lenth: number

  @column()
  public weight: number

  @column()
  public inner_diameter: number

  @column()
  public external_diameter: number

  @hasOne(() => Product)
  public product: HasOne<typeof Product>
}
