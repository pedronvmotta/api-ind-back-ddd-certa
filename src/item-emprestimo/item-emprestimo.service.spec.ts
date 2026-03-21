import { Test, TestingModule } from '@nestjs/testing';
import { ItemEmprestimoService } from './item-emprestimo.service';

describe('ItemEmprestimoService', () => {
  let service: ItemEmprestimoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemEmprestimoService],
    }).compile();

    service = module.get<ItemEmprestimoService>(ItemEmprestimoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
