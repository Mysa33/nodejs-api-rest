import CategoryRepository from "../domain/CategoryRepository"
import Category from "../domain/category"
import CategoryNotFound from "../domain/categoryNotFound"

export default class LocalCategoryRepository implements CategoryRepository {
    findAll(): Category[] {
      return localCategoriesDataSource
    }
  
    findOne(categoryCode: string): Category | CategoryNotFound {
      const category = localCategoriesDataSource.find((category) => category.code == categoryCode)
      if (!category) {
        return new CategoryNotFound()
      }
      return category
    }
  }
  export const localCategoriesDataSource: Category[] = [
    {
      code: 'semences',
      label: 'Semences',
      available_measure_units: ['unit', 'kg']
    },
    {
      code: 'nutrition_vegetal_amendements',
      label: 'Nutrition du végétal et amendements',
      available_measure_units: ['kg', 't', 'l']
    },
    {
      code: 'services',
      label: 'Services',
      available_measure_units: ['unit']
    },
    {
      code: 'equipements_exploitant',
      label: "Equipement de l'exploitant",
      available_measure_units: ['unité']
    },
    {
      code: 'sante_vegetal',
      label: 'Santé du végétal',
      available_measure_units: ['unit', 'kg', 'l']
    },
    {
      code: 'equipements_culture',
      label: 'Equipement culture',
      available_measure_units: ['unit']
    },
    {
      code: 'amenagement_exploitation',
      label: "Aménagement de l'exploitation",
      available_measure_units: ['unit']
    },
    {
      code: 'equipement_vigne_arbo',
      label: 'Palissage & Equipement Vigne-Arbo',
      available_measure_units: ['unit']
    }
  ]
  