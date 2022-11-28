import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

import ItemsModel from './Item'

export default class CharacterInfo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public class: string

  @column()
  public current_hp: number

  @column()
  public max_hp: number

  @column()
  public current_mana: number

  @column()
  public max_mana: number

  @hasMany(() => ItemsModel, { foreignKey: 'expert_class', localKey: 'class' })
  public class_items: HasMany<typeof ItemsModel>
}
