'use strict'
import { categoriesRoutes } from './infra/routes'

const Hapi = require('@hapi/hapi')

const init = async () => {
  console.log('Server running init()')
  const server = Hapi.server({
    port: 3000,
    host: 'localhost'
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request: any, h: any) => {
      return 'Hello World!'
    }
  })

  server.route(categoriesRoutes)

  await server.start()
  console.info('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.info(err)
  process.exit(1)
})

init()
