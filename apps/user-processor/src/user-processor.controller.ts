import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

import { UpdateUser, User } from '@app/core/user'
import { from, Observable } from 'rxjs'

@Controller()
export class UserProcessorController {
  @MessagePattern('create')
  createUser(user: User): User | Observable<number> {
    console.log('----------------------------------------------')
    console.log('creating user', user)
    console.log('----------------------------------------------')
    return from([1, 2, 3])
  }

  @MessagePattern('update')
  updateUser(user: UpdateUser): User {
    console.log('----------------------------------------------')
    console.log('updating your user', user)
    console.log('----------------------------------------------')

    const u: User = {
      name: 'Test',
      email: 'test@test.com',
      dob: new Date(),
      stupid: false,
    }

    return {
      ...u,
      ...user,
    }
  }
}
