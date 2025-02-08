import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const galleryPieces = await prisma.galleryPiece.findMany({
        where: {
            status: 'On_Sale',  // Filter to fetch only those with status 'On_Sale'
        },
    });
    return new Response(JSON.stringify(galleryPieces), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to fetch gallery pieces:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch gallery pieces" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}