import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ItemsModel from 'App/Models/Item'

import { ItemsCreateValidator, ItemsUpdateValidator } from 'App/Validators/Items'

import { SharedRepositories } from '../../SharedRepositories'

export default class ItemsController {
  public async list({ request }: HttpContextContract) {
    const { filterBy, search } = request.qs()

    return await SharedRepositories.list({ Model: ItemsModel, filterBy, search })
  }

  public async show({ params }: HttpContextContract) {
    return await SharedRepositories.show({ Model: ItemsModel, param: params.id })
  }

  public async create({ request }: HttpContextContract) {
    return await SharedRepositories.create({
      Model: ItemsModel,
      Validator: ItemsCreateValidator,
      request,
    })
  }

  public async update({ request }: HttpContextContract) {
    return await SharedRepositories.update({
      Model: ItemsModel,
      Validator: ItemsUpdateValidator,
      request,
    })
  }

  public async delete({ params }: HttpContextContract) {
    const data = await SharedRepositories.delete({ Model: ItemsModel, param: params.id })
    return { message: 'Item removido com sucesso!', data }
  }
}
