import { UserService, User } from '@app/core/user'
import { Controller, Get, HttpCode, Post } from '@nestjs/common'
import { map, Observable, tap } from 'rxjs'

@Controller()
export class ProtwoController {
  constructor(private readonly userService: UserService) {}

  @Get()
  ping(): string {
    return 'Hello from PROTWO!!!'
  }

  @Get('update')
  @HttpCode(201)
  update(): Observable<User> {
    return this.userService.updateUser({
      name: 'Mr Update',
    })
  }
}
