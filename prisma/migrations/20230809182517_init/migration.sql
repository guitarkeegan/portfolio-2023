-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "authors" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "concept" TEXT NOT NULL,
    "process" TEXT NOT NULL,
    "challenges" TEXT NOT NULL,
    "technologies" TEXT NOT NULL,
    "liveUrl" TEXT,
    "githubUrl" TEXT,
    "demoUrl" TEXT,
    "thumbnail" TEXT NOT NULL,
    "screenShot1" TEXT,
    "screenShot2" TEXT,
    "screenShot3" TEXT,
    "alt" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");
