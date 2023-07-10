-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "technologies" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");
