-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GalleryPiece" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "size" TEXT NOT NULL DEFAULT 'A2',
    "medium" TEXT NOT NULL DEFAULT 'Acrylic_Painting',
    "price" REAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'On_Sale',
    "orientation" TEXT NOT NULL DEFAULT 'portrait'
);
INSERT INTO "new_GalleryPiece" ("id", "image", "medium", "orientation", "price", "size", "status", "title") SELECT "id", "image", "medium", "orientation", "price", "size", "status", "title" FROM "GalleryPiece";
DROP TABLE "GalleryPiece";
ALTER TABLE "new_GalleryPiece" RENAME TO "GalleryPiece";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
