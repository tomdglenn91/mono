import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { UserProcessorController } from './user-processor.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TICK_SERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  controllers: [UserProcessorController],
})
export class UserProcessorModule {}
