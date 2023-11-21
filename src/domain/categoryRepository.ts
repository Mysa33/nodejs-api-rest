import Category from './category'
import CategoryNotFound from './categoryNotFound'

export default interface CategoryRepository {
  findAll(): Category[]
  findOne(categoryCode: string): Category | CategoryNotFound
}
