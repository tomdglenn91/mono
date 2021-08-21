import { UserService, User } from '@app/core/user'
import { Controller, Get, Post } from '@nestjs/common'
import { filter, Observable, scan, tap } from 'rxjs'

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  ping(): string {
    return 'Hello from MONO!!!'
  }

  @Get('create')
  create(): Observable<User> {
    return this.userService.createUser(true).pipe(
      scan((acc: any, val: any) => acc + val, 0),
      tap((v) => console.log('got value', v)),
    )
  }
}
