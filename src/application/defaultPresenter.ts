import { ResponseObject, ResponseToolkit } from '@hapi/hapi'

export interface DefaultPresenter {
  found(value: any): ResponseObject
  notFound(message: string): ResponseObject
}

export class DefaultPresenterHapiResponse implements DefaultPresenter {
  constructor(private hapiJsResponseToolkit: ResponseToolkit) {}

  found(value: any): ResponseObject {
    return this.hapiJsResponseToolkit.response(value)
  }

  notFound(message: string): ResponseObject {
    return this.hapiJsResponseToolkit.response(message)
  }
}
