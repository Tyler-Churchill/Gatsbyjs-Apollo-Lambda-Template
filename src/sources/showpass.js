import { RESTDataSource } from 'apollo-datasource-rest'

class ShowpassAPI extends RESTDataSource {
  baseURL = 'https://showpass.com/api/public/'

  async didReceiveResponse(response) {
    if (response.ok) {
      const body = await this.parseBody(response)
      return body.message
    } else {
      throw await this.errorFromResponse(response)
    }
  }

  // returns events
  async getEvents() {
    const dogs = await this.get(`events`)
  }
}
