import GetCategoryListUseCase from './categoryListUseCase'
import { DefaultPresenterHapiResponse } from './defaultPresenter'

export default class CategoriesController {
  constructor(private readonly getCategoryListUseCase: GetCategoryListUseCase) {}

  async index(request: any, hapiJsResponseToolkit: any) {
    const presenter = new DefaultPresenterHapiResponse(hapiJsResponseToolkit)
    return this.getCategoryListUseCase.execute(presenter)
  }
}
