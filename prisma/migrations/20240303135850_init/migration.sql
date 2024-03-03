-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "conversa" (
    "id" SERIAL NOT NULL,
    "id_usu1" INTEGER NOT NULL,
    "id_usu2" INTEGER NOT NULL,

    CONSTRAINT "conversa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mensagem" (
    "id" SERIAL NOT NULL,
    "remetente" INTEGER NOT NULL,
    "destinatario" INTEGER NOT NULL,
    "item" TEXT NOT NULL,
    "id_conversa" INTEGER NOT NULL,

    CONSTRAINT "mensagem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
