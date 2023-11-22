import { ResponseObject } from '@hapi/hapi'
import { DefaultPresenterHapiResponse } from './defaultPresenter'
import CategoryRepository from '../domain/categoryRepository'

export default class GetCategoryListUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(presenter: DefaultPresenterHapiResponse): Promise<ResponseObject> {
    const categories = this.categoryRepository.findAll()
    return presenter.found(categories, 200)
  }
}
