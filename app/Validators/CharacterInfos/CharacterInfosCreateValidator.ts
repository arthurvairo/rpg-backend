import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CharacterInfosCreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string(),
    class: schema.string(),
    current_hp: schema.number(),
    max_hp: schema.number(),
    current_mana: schema.number(),
    max_mana: schema.number(),
  })

  public messages: CustomMessages = {}
}
