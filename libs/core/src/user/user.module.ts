import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { UserService } from './user.service'

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP },
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
