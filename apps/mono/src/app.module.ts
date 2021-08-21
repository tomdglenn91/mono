import { Module } from '@nestjs/common'

import { UserModule } from '@app/core/user'
import { AppController } from './app.controller'

@Module({
  imports: [UserModule],
  controllers: [AppController],
})
export class AppModule {}
