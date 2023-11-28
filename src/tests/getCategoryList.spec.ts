import FakeHapiResponse from './fakeHapiResponse'
import LocalCategoryRepository, { localCategoriesDataSource } from '../infra/localCategoryRepository'
import CategoriesController from '../application/categoryListController'
import GetCategoryListUseCase from '../application/categoryListUseCase'

describe('Récupérer la liste des catégories', () => {
  test('renvoie la liste des catégories', async () => {
    // GIVEN
    const fakeHapiResponse = new FakeHapiResponse()
    const localCategoryRepository = new LocalCategoryRepository()
    const getCategoryListUseCase = new GetCategoryListUseCase(localCategoryRepository)
    const categoryListController = new CategoriesController(getCategoryListUseCase)

    const request = {
      headers: { accept: 'application/json' }
    }
    const categoriesDTO = localCategoriesDataSource.map((category) => ({
      code: category.code,
      label: category.label,
      available_measure_units: category.available_measure_units
    }))
    // WHEN
    await categoryListController.index(request, fakeHapiResponse)

    // THEN
    expect(fakeHapiResponse).toMatchObject({
      body: categoriesDTO
    })
  })
})
