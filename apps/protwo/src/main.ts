import { NestFactory } from '@nestjs/core'
import { ProtwoModule } from './protwo.module'

async function bootstrap() {
  const app = await NestFactory.create(ProtwoModule)
  await app.listen(3001)
}
bootstrap()
