/*
  Warnings:

  - A unique constraint covering the columns `[id_usu1,id_usu2]` on the table `conversa` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "conversa_id_usu1_id_usu2_key" ON "conversa"("id_usu1", "id_usu2");
