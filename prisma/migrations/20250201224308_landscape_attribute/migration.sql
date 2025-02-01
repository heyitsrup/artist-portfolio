/*
  Warnings:

  - Added the required column `orientation` to the `GalleryPiece` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GalleryPiece" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "orientation" TEXT NOT NULL DEFAULT 'portrait'
);
INSERT INTO "new_GalleryPiece" ("id", "image", "medium", "price", "size", "title") SELECT "id", "image", "medium", "price", "size", "title" FROM "GalleryPiece";
DROP TABLE "GalleryPiece";
ALTER TABLE "new_GalleryPiece" RENAME TO "GalleryPiece";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
