import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('item')
      table.string('type')
      table.string('effect')
      table.integer('range')
      table.string('damage_or_heal')
      table.string('expert_class').primary()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
