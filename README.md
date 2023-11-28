# Mini mini masterclass Développer une API REST en Nodejs + Hapi

## Présentation

Il s'agit d'une formation courte qui peut être suivie en groupe ou en autonomie.
Le but de cette formation est de démarrer le développement d'une API en Nodejs à partir de zéro.
Nous allons commencer par les étapes communes à tous les projets en TypeScript. L'un des objectifs de cette formation est de vous permettre de capitaliser des connaissances qui vous serviront dans vos projets TS et JS.
Pour cette mini formation, nous n'allons pas utiliser de base de données.
Nous allons développer une API REST en Nodejs et le framework Hapi.

- ### Etape 1 : Hello World

  - git init
  - Créer .gitignore
  - Présenter Conventional commit
  - Installer `typescript` comme dev dependencie
  - Init typescript : `yarn tsc --init`
  - Installer Hapi comme dépendance : `yarn add @hapi/hapi`
  - Installer `@types/node` comme dev deps
  - Installer nodemon : comme dev deps ou en global : `yarn --dev nodemon`
  - Créer `nodemon.json`
  - Créer `index.ts` se référer à [https://www.mongodb.com/developer/languages/javascript/hapijs-nodejs-driver/](https://www.mongodb.com/developer/languages/javascript/hapijs-nodejs-driver/)
  - Lancer **Hello world**

- ### Etape 2 : Lint and format

  - Installer **Eslint** comme dev dependencie
    - Installer `@typescript-eslint/parser` comme dev dependencie
    - Installer `eslint-plugin-import` comme dev dependencie
    - Installer `eslint-plugin-security` comme dev dependencie
  - Installer **Prettier** comme dev dependencie
    - Installer `eslint-config-prettier` comme dev dependencie
    - Installer `eslint-plugin-prettier` comme dev dependencie
  - Créer `.prettierignore`
  - Créer `.prettierrc`
  - Créer `.eslintrc`
  - Ajouter les scripts au `package.json`
  - Tester les scripts
  - Corriger l'erreur du linter en créant `.eslintignore`

- ### Etape 3 : La CI

  - Créer github workflow et le YML pour les steps Lint et Build
  - Tester la CI

- ### Etape 4 : créer l'endpoint categories

  - Créer la route catégories :
    - La liste des catégories
    - Catégorie par code
    - Un bref refresh concernant la clean archi et design api
  - **Domain** :
    - créer l'interface Category
    - créer l'interface LocalCategoryRepository
    - Créer une classe notFound afin de gérer les erreurs 404
  - **Infra** :
    - créer le repo LocalCategoryRepository
    - Ajouter les données
    - Créer find et findAll()
  - **Application** :
    - Créer les 2 useCases
    - créer les 2 controlleurs
  - Injection des dépendances
    - Présenter quelques outils
    - L'approche adoptée dans cet exemple.
    - Injecter les dépendances (dans les useCases Dans les controlleurs)
    - Binder les controleurs dans `index.ts`
    - Vérifier que nos endpoints fonctionnent
    - Créer un **Presenter** et refacto les useCases.
    - Extraire les routes

- ### Etape 5 : Tester l'Api
  
  - Intallser `Jest` : `yarn add --dev jest`
  - Intallser `ts-jest` : `yarn add --dev ts-jest`
  - Installer `@types/jest` : `yarn add --dev @types/jest`
  - Créer le ficher `jest.config.json` ou modifier le fichier `package.json`
  - Modifier le fichier `.eslintrc`
  - Ajouter le script de test dans le fichier `package.json`
  - Créer la classe `FakeHapiResponse`
  - Tester l'api
