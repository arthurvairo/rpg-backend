import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'character_infos'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.string('class')
      table.integer('current_hp')
      table.integer('max_hp')
      table.integer('current_mana')
      table.integer('max_mana')
      table.integer('class_items').unsigned().references('items.expert_class')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
