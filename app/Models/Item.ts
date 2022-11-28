import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Item extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public item: string

  @column()
  public type: string

  @column()
  public effect: string

  @column()
  public range: number

  @column()
  public damage_or_heal: string

  @column()
  public expert_class: string
}
