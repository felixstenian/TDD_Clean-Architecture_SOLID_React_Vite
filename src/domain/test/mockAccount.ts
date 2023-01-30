import { faker } from '@faker-js/faker'

import { AuthenticationProps } from '@/domain/usecases'
import { AccountModel } from '@/domain/models'

export const mockAuthentication = (): AuthenticationProps => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
