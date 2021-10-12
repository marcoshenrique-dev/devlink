/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `pages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pages_url_key" ON "pages"("url");
