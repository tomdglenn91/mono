import { User } from '@app/models'

// Re-export to keep all models in one place if requiring the user module
export { User } from '@app/models'
export type UpdateUser = Partial<User>
