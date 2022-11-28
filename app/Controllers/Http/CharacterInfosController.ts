import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CharacterInfosModel from 'App/Models/CharacterInfo'

import {
  CharacterInfosCreateValidator,
  CharacterInfosUpdateValidator,
} from 'App/Validators/CharacterInfos'

import { SharedRepositories } from '../../SharedRepositories'

export default class CharacterInfosController {
  public async list({ request }: HttpContextContract) {
    const { filterBy, search } = request.qs()

    return await SharedRepositories.list({
      Model: CharacterInfosModel,
      filterBy,
      search,
      relationshipField: 'class_items',
    })
  }

  public async show({ params }: HttpContextContract) {
    return await SharedRepositories.show({ Model: CharacterInfosModel, param: params.id })
  }

  public async create({ request }: HttpContextContract) {
    return await SharedRepositories.create({
      Model: CharacterInfosModel,
      Validator: CharacterInfosCreateValidator,
      request,
    })
  }

  public async update({ request }: HttpContextContract) {
    return await SharedRepositories.update({
      Model: CharacterInfosModel,
      Validator: CharacterInfosUpdateValidator,
      request,
    })
  }

  public async delete({ params }: HttpContextContract) {
    const data = await SharedRepositories.delete({ Model: CharacterInfosModel, param: params.id })
    return { message: 'Informações do personagem removidas com sucesso!', data }
  }
}
