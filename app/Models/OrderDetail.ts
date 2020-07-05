import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'

export default class OrderDetail extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public reference: string

  @column()
  public payment_method: string

  @column()
  public order_status: string

  @column()
  public extra_amount: string

  @column()
  public intallment_quantity: number

  @column()
  public intallment_value: number

  @column()
  public order_id: number

  @hasOne(() => Order)
  public order: HasOne<typeof Order>
}
