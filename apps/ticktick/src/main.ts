import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { TicktickModule } from './ticktick.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TicktickModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3003,
      },
    },
  )

  app.listen()
}
bootstrap()
