import { v4 as uuidv4 } from 'uuid'

import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
import Application from '@ioc:Adonis/Core/Application'

import { MomentsCreateValidator, MomentsUpdateValidator } from 'App/Validators/Moments'

export default class MomentsController {
  public async list() {
    const moments = await Moment.all()

    return moments
  }

  public async show({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    return moment
  }

  public async create({ request, response }: HttpContextContract) {
    await request.validate(MomentsCreateValidator)

    const data = request.body()
    const image = request.file('image')

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`
      await image.move(Application.tmpPath('uploads'), { name: imageName })

      data.image = imageName
    }

    const moment = await Moment.create(data)
    response.status(201)

    return moment
  }

  public async update({ request, params }) {
    await request.validate(MomentsUpdateValidator)

    const data = request.body()
    const moment = await Moment.findOrFail(params.id)

    moment.merge(data)
    await moment.save()

    return moment
  }

  public async delete({ params }: HttpContextContract) {
    const moment = await Moment.findOrFail(params.id)

    await moment.delete()

    return { message: 'Momento removido com sucesso!', data: moment }
  }
}
