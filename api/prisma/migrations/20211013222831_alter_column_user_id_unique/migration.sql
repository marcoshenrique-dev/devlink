/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `pages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pages_userId_key" ON "pages"("userId");
