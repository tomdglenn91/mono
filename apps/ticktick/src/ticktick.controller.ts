import { User } from '@app/models'
import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'
import { interval, Observable, take, tap } from 'rxjs'

@Controller()
export class TicktickController {
  @MessagePattern('process')
  getHello(user: User): Observable<number> {
    return interval(5000).pipe(
      take(5),
      tap((val) => console.log(`Async process of user ${user.email}: ${val}`)),
    )
  }
}
