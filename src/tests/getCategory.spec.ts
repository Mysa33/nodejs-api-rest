import FakeHapiResponse from './fakeHapiResponse'
import LocalCategoryRepository from '../infra/localCategoryRepository'
import CategoryController from '../application/categoryController'
import GetCategoryUseCase from '../application/categoryUseCase'

describe('Récupérer la liste des catégories', () => {
  const localCategoryRepository = new LocalCategoryRepository()
  const getCategoryUseCase = new GetCategoryUseCase(localCategoryRepository)
  const categoryController = new CategoryController(getCategoryUseCase)
  let fakeHapiResponse: FakeHapiResponse
  beforeEach(() => {
    fakeHapiResponse = new FakeHapiResponse()
  })
  test('renvoie la catégorie demandée', async () => {
    // GIVEN
    const request = {
      headers: { accept: 'application/json' },
      params: {
        category_code: 'semences'
      }
    }
    const expectedCategory = {
      code: 'semences',
      label: 'Semences',
      available_measure_units: ['unit', 'kg']
    }
    // WHEN
    await categoryController.show(request, fakeHapiResponse)

    // THEN
    expect(fakeHapiResponse).toMatchObject({
      body: expectedCategory
    })
  })

  test('renvoie une erreur si la catégorie n est pas trouvée', async () => {
    // GIVEN
    const invalideCategoryCode = 'abc'
    const request = {
      headers: { accept: 'application/json' },
      params: {
        category_code: invalideCategoryCode
      }
    }

    // WHEN
    await categoryController.show(request, fakeHapiResponse)

    // THEN
    expect(fakeHapiResponse).toMatchObject({
      body: 'La catégorie ' + invalideCategoryCode + " n'existe pas"
    })
  })
})
