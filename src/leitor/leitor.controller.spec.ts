import { Test, TestingModule } from '@nestjs/testing';
import { LeitorController } from './leitor.controller';
import { LeitorService } from './leitor.service';

describe('LeitorController', () => {
  let controller: LeitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeitorController],
      providers: [LeitorService],
    }).compile();

    controller = module.get<LeitorController>(LeitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
