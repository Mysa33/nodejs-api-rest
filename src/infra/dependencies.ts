import LocalCategoryRepository from './localCategoryRepository'
import GetCategoryListUseCase from '../application/categoryListUseCase'
import GetCategoryUseCase from '../application/categoryUseCase'
import CategoriesController from '../application/categoryListController'
import CategoryController from '../application/categoryController'

const categoryRepository = new LocalCategoryRepository()
const getCategoryListUseCase = new GetCategoryListUseCase(categoryRepository)
const getGategoryUseCase = new GetCategoryUseCase(categoryRepository)
const categoryListController = new CategoriesController(getCategoryListUseCase)
const categoryController = new CategoryController(getGategoryUseCase)

export const dependencies = {
  categoryRepository,
  getCategoryListUseCase,
  categoryListController,
  categoryController
}
