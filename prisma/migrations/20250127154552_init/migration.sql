-- CreateTable
CREATE TABLE "GalleryPiece" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "price" REAL NOT NULL
);
