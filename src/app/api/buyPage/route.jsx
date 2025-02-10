import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
        return new Response(JSON.stringify({ error: "Title is required" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    try {
        const galleryPiece = await prisma.galleryPiece.findFirst({  // Use findFirst instead of findUnique
            where: { title },
        });

        if (!galleryPiece) {
            return new Response(JSON.stringify({ error: "Gallery piece not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(galleryPiece), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Failed to fetch gallery piece:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch gallery piece" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}