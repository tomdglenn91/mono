import { Test, TestingModule } from '@nestjs/testing';
import { ProtwoController } from './protwo.controller';
import { ProtwoService } from './protwo.service';

describe('ProtwoController', () => {
  let protwoController: ProtwoController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProtwoController],
      providers: [ProtwoService],
    }).compile();

    protwoController = app.get<ProtwoController>(ProtwoController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(protwoController.getHello()).toBe('Hello World!');
    });
  });
});
