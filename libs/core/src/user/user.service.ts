import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable, tap } from 'rxjs'
import { UpdateUser, UserModule } from '.'

import { User } from './user.model'

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private client: ClientProxy) {}

  createUser(stupid?: boolean): Observable<User> {
    const user: User = {
      name: 'Test',
      email: 'test@test.com',
      dob: new Date(),
      stupid: stupid || false,
    }

    return this.client.send<User, User>('create', user)
  }

  updateUser(update: UpdateUser): Observable<User> {
    return this.client.send<User, UpdateUser>('update', update)
  }
}
