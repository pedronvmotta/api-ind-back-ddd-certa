import { Test, TestingModule } from '@nestjs/testing';
import { ItemEmprestimoController } from './item-emprestimo.controller';
import { ItemEmprestimoService } from './item-emprestimo.service';

describe('ItemEmprestimoController', () => {
  let controller: ItemEmprestimoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemEmprestimoController],
      providers: [ItemEmprestimoService],
    }).compile();

    controller = module.get<ItemEmprestimoController>(ItemEmprestimoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
