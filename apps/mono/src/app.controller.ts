import { UserService, User } from '@app/core/user'
import { Controller, Get, Post } from '@nestjs/common'
import { Observable } from 'rxjs'

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  ping(): string {
    return 'Hello from MONO!!!'
  }

  @Get('create')
  create(): Observable<User> {
    return this.userService.createUser(true)
  }
}
