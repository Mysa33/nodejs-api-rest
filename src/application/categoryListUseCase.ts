import { ResponseObject } from '@hapi/hapi'
import CategoryRepository from '../domain/categoryRepository'
import { DefaultPresenterHapiResponse } from './defaultPresenter'

export default class GetCategoryListUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(presenter: DefaultPresenterHapiResponse): Promise<ResponseObject> {
    const categories = this.categoryRepository.findAll()
    return presenter.found(categories)
  }
}
