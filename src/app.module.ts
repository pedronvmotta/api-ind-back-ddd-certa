import { Module } from '@nestjs/common';
import { LeitorModule } from './leitor/leitor.module';
import { EmprestimoModule } from './emprestimo/emprestimo.module';
import { ItemEmprestimoModule } from './item-emprestimo/item-emprestimo.module';
import { LivroModule } from './livro/livro.module';
import { AutorModule } from './autor/autor.module';

@Module({
    imports: [LeitorModule, EmprestimoModule, ItemEmprestimoModule, LivroModule, AutorModule]
})

export class AppModule {}