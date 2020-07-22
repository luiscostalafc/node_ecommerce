import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Group from './Group'
import Subgroup from './Subgroup'
import Asset from './Asset'
import ProductApplication from './ProductApplication'
import ProductDimension from './ProductDimension'
import ProductDescription from './ProductDescription'
import ProductAsingment from './ProductAsingment'
import StockOperation from './StockOperation'
import ProductVariation from './ProductVariation'

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

  @hasOne(() => ProductApplication)
  public productApplication: HasOne<typeof ProductApplication>

  @hasOne(() => ProductDimension)
  public productDimension: HasOne<typeof ProductDimension>

  @hasOne(() => ProductDescription)
  public productDescription: HasOne<typeof ProductDescription>

  @hasOne(() => ProductAsingment)
  public productAsingment: HasOne<typeof ProductAsingment>

  @hasOne(() => ProductVariation)
  public productVariations: HasOne<typeof ProductVariation>

  @hasMany(() => StockOperation)
  public stockOperation: HasMany<typeof StockOperation>

  @manyToMany(() => Asset, {
    pivotTable: 'products_has_assets',
  })
  public asset: ManyToMany<typeof Asset>
}
