import { schema, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MomentsUpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string(),
    description: schema.string(),
    image: schema.file({
      size: '2mb',
      extnames: ['jpg', 'png'],
    }),
    id: schema.number(),
  })

  public messages: CustomMessages = {}
}
