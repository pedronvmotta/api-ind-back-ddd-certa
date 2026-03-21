import { PartialType } from '@nestjs/swagger';
import { CreateItemEmprestimoDto } from './create-item-emprestimo.dto';

export class UpdateItemEmprestimoDto extends PartialType(CreateItemEmprestimoDto) {}
