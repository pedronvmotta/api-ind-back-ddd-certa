import { Test, TestingModule } from '@nestjs/testing';
import { LeitorService } from './leitor.service';

describe('LeitorService', () => {
  let service: LeitorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LeitorService],
    }).compile();

    service = module.get<LeitorService>(LeitorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
