import { HttpStatusCode, HttpPostClient } from '@/data/protocols/http'

import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors'
import { Authentication, AuthenticationProps } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'

// Classe de produção
export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationProps,
      AccountModel
    >
  ) {}

  async auth(props: AuthenticationProps): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: props
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}
