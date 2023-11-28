import { ServerRoute } from '@hapi/hapi'
import { dependencies } from './dependencies'

export const categoriesRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/categories',
    handler: dependencies.categoryListController.index.bind(dependencies.categoryListController)
  },
  {
    method: 'GET',
    path: '/categories/{category_code}',
    handler: dependencies.categoryController.show.bind(dependencies.categoryController)
  }
]
