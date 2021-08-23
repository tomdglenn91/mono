import { Module } from '@nestjs/common'
import { TicktickController } from './ticktick.controller'

@Module({
  imports: [],
  controllers: [TicktickController],
})
export class TicktickModule {}
