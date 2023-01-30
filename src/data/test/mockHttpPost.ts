import { faker } from '@faker-js/faker'

import { HttpPostProps } from '../protocols/http'

export const mockPostRequest = (): HttpPostProps<unknown> => ({
  url: faker.internet.url(),
  body: faker.database.collation()
})
