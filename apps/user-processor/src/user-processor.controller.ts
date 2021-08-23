import { Controller, Inject } from '@nestjs/common'
import { ClientProxy, MessagePattern } from '@nestjs/microservices'

import { UpdateUser, User } from '@app/core/user'
import { tap } from 'rxjs'

@Controller()
export class UserProcessorController {
  constructor(
    @Inject('TICK_SERVICE') private readonly tickService: ClientProxy,
  ) {}

  @MessagePattern('create')
  createUser(user: User): User {
    console.log('----------------------------------------------')
    console.log('creating user', user)
    console.log('----------------------------------------------')

    this.tickService.emit('process', user)

    return user
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
