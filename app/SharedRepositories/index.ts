import { TSharedListObject } from 'app/@Types/TSharedRepositories'

export class SharedRepositories {
  public static async list({ Model, filterBy, search, relationshipField }: TSharedListObject) {
    if (filterBy && search) {
      return { data: await Model.findByOrFail(filterBy, search) }
    }

    if (relationshipField) return { data: await Model.query().preload(relationshipField) }
    else return { data: await Model.all() }
  }

  public static async show({ Model, param }) {
    const data = await Model.findOrFail(param)
    return { data }
  }

  public static async create({ Model, Validator, request }) {
    await request.validate(Validator)

    const data = await Model.create(request.body())
    return { data }
  }

  public static async update({ Model, Validator, request }) {
    await request.validate(Validator)

    const data = await Model.findOrFail(request.body().id)

    data.merge(request.body())
    data.save()

    return { data }
  }

  public static async delete({ Model, param }) {
    const data = await Model.findOrFail(param)
    await data.delete()

    return data
  }
}
