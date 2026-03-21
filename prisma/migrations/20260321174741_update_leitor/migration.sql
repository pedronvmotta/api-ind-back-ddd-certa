/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Leitor` table. All the data in the column will be lost.
  - Added the required column `data_de_nascimento` to the `Leitor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Leitor" DROP COLUMN "dataNascimento",
ADD COLUMN     "data_de_nascimento" TIMESTAMP(3) NOT NULL;
