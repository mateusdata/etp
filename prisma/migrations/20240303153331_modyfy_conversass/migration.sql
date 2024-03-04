/*
  Warnings:

  - You are about to drop the column `id_usu1` on the `conversa` table. All the data in the column will be lost.
  - You are about to drop the column `id_usu2` on the `conversa` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId1,userId2]` on the table `conversa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId1` to the `conversa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId2` to the `conversa` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "conversa_id_usu1_id_usu2_key";

-- AlterTable
ALTER TABLE "conversa" DROP COLUMN "id_usu1",
DROP COLUMN "id_usu2",
ADD COLUMN     "userId1" INTEGER NOT NULL,
ADD COLUMN     "userId2" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "conversa_userId1_userId2_key" ON "conversa"("userId1", "userId2");

-- AddForeignKey
ALTER TABLE "conversa" ADD CONSTRAINT "conversa_userId1_fkey" FOREIGN KEY ("userId1") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "conversa" ADD CONSTRAINT "conversa_userId2_fkey" FOREIGN KEY ("userId2") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
