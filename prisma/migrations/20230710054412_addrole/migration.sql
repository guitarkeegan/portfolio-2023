/*
  Warnings:

  - Added the required column `role` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "technologies" TEXT NOT NULL
);
INSERT INTO "new_Project" ("authors", "description", "githubUrl", "id", "liveUrl", "technologies", "title") SELECT "authors", "description", "githubUrl", "id", "liveUrl", "technologies", "title" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
