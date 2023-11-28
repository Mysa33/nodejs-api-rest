import GetCategoryUseCase from './categoryUseCase'
import { DefaultPresenterHapiResponse } from './defaultPresenter'

export default class CategoryController {
  constructor(private readonly getCategoryUseCase: GetCategoryUseCase) {}

  async show(request: any, hapiJsResponseToolkit: any) {
    const { category_code } = request.params
    const presenter = new DefaultPresenterHapiResponse(hapiJsResponseToolkit)
    return this.getCategoryUseCase.execute(category_code, presenter)
  }
}
