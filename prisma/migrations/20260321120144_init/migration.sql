/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Leitor" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "dataNascimento" TIMESTAMP(3) NOT NULL,
    "endereco" TEXT NOT NULL,
    "observacao" TEXT,

    CONSTRAINT "Leitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Emprestimo" (
    "id" SERIAL NOT NULL,
    "data_emprestimo" TIMESTAMP(3) NOT NULL,
    "prazo_de_devolucao" TIMESTAMP(3) NOT NULL,
    "observacoes" TEXT NOT NULL,
    "id_leitor" INTEGER NOT NULL,

    CONSTRAINT "Emprestimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemEmprestimo" (
    "id" SERIAL NOT NULL,
    "data_de_devolucao" TIMESTAMP(3) NOT NULL,
    "valor_multa" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "id_emprestimo" INTEGER NOT NULL,
    "id_livro" INTEGER NOT NULL,

    CONSTRAINT "ItemEmprestimo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Livro" (
    "id" SERIAL NOT NULL,
    "nome_livro" TEXT NOT NULL,
    "editora" TEXT NOT NULL,
    "versao" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "idioma" TEXT NOT NULL,
    "qtde_total" INTEGER NOT NULL,
    "qtde_disponivel" INTEGER NOT NULL,

    CONSTRAINT "Livro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" SERIAL NOT NULL,
    "nome_autor" TEXT NOT NULL,
    "origem" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "nome_artistico" TEXT NOT NULL,
    "id_livro" INTEGER NOT NULL,

    CONSTRAINT "Autor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leitor_email_key" ON "Leitor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Leitor_cpf_key" ON "Leitor"("cpf");

-- AddForeignKey
ALTER TABLE "Emprestimo" ADD CONSTRAINT "Emprestimo_id_leitor_fkey" FOREIGN KEY ("id_leitor") REFERENCES "Leitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemEmprestimo" ADD CONSTRAINT "ItemEmprestimo_id_emprestimo_fkey" FOREIGN KEY ("id_emprestimo") REFERENCES "Emprestimo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemEmprestimo" ADD CONSTRAINT "ItemEmprestimo_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Autor" ADD CONSTRAINT "Autor_id_livro_fkey" FOREIGN KEY ("id_livro") REFERENCES "Livro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
