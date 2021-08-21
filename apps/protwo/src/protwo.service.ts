import { Injectable } from '@nestjs/common'

@Injectable()
export class ProtwoService {
  getHello(): string {
    return 'Hello from two!'
  }
}
