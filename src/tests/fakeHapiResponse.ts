export default class FakeHapiResponse {
  body: any

  response(value: any): any {
    this.body = value
    return this
  }
}
