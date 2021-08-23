import { UserService, User } from '@app/core/user'
import { Controller, Get, Post, Query } from '@nestjs/common'
import { filter, Observable, scan, tap } from 'rxjs'

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  ping(): string {
    return 'Hello from MONO!!!'
  }

  @Get('create')
  create(@Query('email') email: string): Observable<User> {
    console.log('retrieved request to create user')

    return this.userService
      .createUser(email, true)
      .pipe(tap(() => console.log('request returned')))
  }
}
