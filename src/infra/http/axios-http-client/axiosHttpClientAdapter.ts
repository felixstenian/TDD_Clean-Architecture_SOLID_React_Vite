import axios from 'axios'

import {
  HttpPostClient,
  HttpPostProps,
  HttpResponse
} from '@/data/protocols/http'

export class AxiosHttpClientAdapter
  implements HttpPostClient<unknown, unknown>
{
  async post({
    url,
    body
  }: HttpPostProps<unknown>): Promise<HttpResponse<unknown>> {
    const httpResponse = await axios.post(url, body)

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
