const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.galleryPiece.createMany({
    data: [
      { title: "Cold", image: "/images/media/gallery_pieces/Cold.png", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Fire", image: "/images/media/gallery_pieces/Fire.png", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Stare", image: "/images/media/gallery_pieces/Stare.png", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Dreams", image: "/images/media/gallery_pieces/Dreams.png", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Pain (Naruto)", image: "/images/media/gallery_pieces/Pain-Anime-Character.JPG", size: "A1", medium: "Acrylic_Painting", price: 40, status: "Sold", orientation: "landscape" },
      { title: "Culture", image: "/images/media/gallery_pieces/Culture.jpg", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "The Moment", image: "/images/media/gallery_pieces/The-Moment.png", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Radiance", image: "/images/media/gallery_pieces/Radiance.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Colours", image: "/images/media/gallery_pieces/Colours.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Reflections in Motion", image: "/images/media/gallery_pieces/Reflections-in-Motion.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Beauty", image: "/images/media/gallery_pieces/Beauty.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Monochrome Gaze", image: "/images/media/gallery_pieces/Monochrome-Gaze.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Unwritten Verses", image: "/images/media/gallery_pieces/Unwritten-Verses.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Calmness", image: "/images/media/gallery_pieces/Calmness.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Fire Beneath", image: "/images/media/gallery_pieces/Fire-Beneath.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Hello", image: "/images/media/gallery_pieces/Hello.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Embrace the Culture", image: "/images/media/gallery_pieces/Embrace-the-Culture.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Reflection", image: "/images/media/gallery_pieces/Reflection.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Squares", image: "/images/media/gallery_pieces/Squares.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" },
      { title: "Gratitude", image: "/images/media/gallery_pieces/Gratitude.JPG", size: "A3", medium: "Acrylic_Painting", price: 40, status: "On_Sale", orientation: "portrait" }
    ]
  });

  console.log("Database seeded with artwork!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
