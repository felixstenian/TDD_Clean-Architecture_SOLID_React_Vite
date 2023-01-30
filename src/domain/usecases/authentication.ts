import { AccountModel } from '@/domain/models'

export type AuthenticationProps = {
  email: string
  password: string
}

export interface Authentication {
  auth(props: AuthenticationProps): Promise<AccountModel>
}
