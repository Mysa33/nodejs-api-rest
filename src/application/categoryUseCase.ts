import { ResponseObject } from '@hapi/hapi'
import CategoryNotFound from '../domain/categoryNotFound'
import LocalCategoryRepository from '../infra/localCategoryRepository'
import { DefaultPresenterHapiResponse } from './defaultPresenter'

export default class GetCategoryUseCase {
  constructor(private readonly categoryRepository: LocalCategoryRepository) {}

  async execute(categoryCode: string, presenter: DefaultPresenterHapiResponse): Promise<ResponseObject> {
    const category = this.categoryRepository.findOne(categoryCode)

    if (category instanceof CategoryNotFound) {
      return presenter.notFound(`La catégorie ${categoryCode} n'existe pas`)
    }

    return presenter.found(category)
  }
}
