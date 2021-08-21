import { Module } from '@nestjs/common'
import { UserProcessorController } from './user-processor.controller'

@Module({
  imports: [],
  controllers: [UserProcessorController],
})
export class UserProcessorModule {}
