import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { UserProcessorModule } from './user-processor.module'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserProcessorModule,
    { transport: Transport.TCP },
  )

  await app.listen()
}
bootstrap()
