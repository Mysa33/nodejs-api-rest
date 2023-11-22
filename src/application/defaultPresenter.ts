import { ResponseObject, ResponseToolkit } from '@hapi/hapi'

export interface DefaultPresenter {
  found(value: any, code: number): ResponseObject
  notFound(message: string): ResponseObject
}

export class DefaultPresenterHapiResponse implements DefaultPresenter {
  constructor(private hapiJsResponseToolkit: ResponseToolkit) {}

  found(value: any, code: number): ResponseObject {
    return this.hapiJsResponseToolkit.response(value).code(code)
  }

  notFound(message: string): ResponseObject {
    return this.hapiJsResponseToolkit.response(message)
  }
}
