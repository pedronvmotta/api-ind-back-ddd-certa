import { PartialType } from '@nestjs/swagger';
import { CreateLeitorDto } from './create-leitor.dto';

export class UpdateLeitorDto extends PartialType(CreateLeitorDto) {}
