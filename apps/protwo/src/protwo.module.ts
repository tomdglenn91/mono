import { UserModule } from '@app/core'
import { Module } from '@nestjs/common'
import { ProtwoController } from './protwo.controller'
import { ProtwoService } from './protwo.service'

@Module({
  imports: [UserModule],
  controllers: [ProtwoController],
  providers: [ProtwoService],
})
export class ProtwoModule {}
