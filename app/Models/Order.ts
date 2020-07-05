import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import OrderStatus from './OrderStatus'
import Delivery from './Delivery'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @column()
  public provider_id: number

  @column()
  public order_status_id: number

  @column()
  public delivery_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => User)
  public provider: HasOne<typeof User>

  @hasOne(() => OrderStatus)
  public orderStatus: HasOne<typeof OrderStatus>

  @hasOne(() => Delivery)
  public delivery: HasOne<typeof Delivery>
}
