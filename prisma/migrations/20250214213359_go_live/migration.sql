-- CreateEnum
CREATE TYPE "Size" AS ENUM ('A1', 'A2', 'A3', 'A4');

-- CreateEnum
CREATE TYPE "Medium" AS ENUM ('Acrylic_Painting', 'Watercolour_Painting', 'Biro_Sketch');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('On_Sale', 'Sold');

-- CreateEnum
CREATE TYPE "Orientation" AS ENUM ('portrait', 'landscape');

-- CreateTable
CREATE TABLE "GalleryPiece" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "size" "Size" NOT NULL DEFAULT 'A2',
    "medium" "Medium" NOT NULL DEFAULT 'Acrylic_Painting',
    "price" DOUBLE PRECISION NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'On_Sale',
    "orientation" "Orientation" NOT NULL DEFAULT 'portrait',

    CONSTRAINT "GalleryPiece_pkey" PRIMARY KEY ("id")
);
