const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.galleryPiece.createMany({
    data: [
      {
        title: "Frost",
        image: "/images/media/gallery_pieces/Frost.png",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Radiance ",
        image: "/images/media/gallery_pieces/Radiance.png",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 45,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Stare",
        image: "/images/media/gallery_pieces/Stare.png",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 70,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Dreams",
        image: "/images/media/gallery_pieces/Dreams.png",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Pain (Naruto)",
        image: "/images/media/gallery_pieces/Pain-Anime-Character.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 90,
        status: "Sold",
        orientation: "landscape"
      },
      {
        title: "Culture",
        image: "/images/media/gallery_pieces/Culture.jpg",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 60,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "The Moment",
        image: "/images/media/gallery_pieces/The-Moment.png",
        size: "A3",
        medium: "Biro_Sketch",
        price: 30,
        status: "Sold",
        orientation: "portrait"
      },
      {
        title: "Friends ",
        image: "/images/media/gallery_pieces/Friends.JPG",
        size: "A2",
        medium: "Acrylic_Painting",
        price: 80,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Emotions ",
        image: "/images/media/gallery_pieces/Emotions.JPG",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Reflections in Motion",
        image: "/images/media/gallery_pieces/Reflections-in-Motion.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 80,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Red Halo",
        image: "/images/media/gallery_pieces/Red-Halo.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 60,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Monochrome Gaze",
        image: "/images/media/gallery_pieces/Monochrome-Gaze.JPG",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Unwritten Verses",
        image: "/images/media/gallery_pieces/Unwritten-Verses.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Calmness",
        image: "/images/media/gallery_pieces/Calmness.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 70,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Belief ",
        image: "/images/media/gallery_pieces/Belief.JPG",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Hello",
        image: "/images/media/gallery_pieces/Hello.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 80,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Mirror",
        image: "/images/media/gallery_pieces/Mirror.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Reflection",
        image: "/images/media/gallery_pieces/Reflection.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Squares",
        image: "/images/media/gallery_pieces/Squares.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Gratitude",
        image: "/images/media/gallery_pieces/Gratitude.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 50,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Orchids ",
        image: "/images/media/gallery_pieces/Orchids.JPG",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 70,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Custom  Portrait ",
        image: "/images/media/gallery_pieces/Custom-Portrait.jpg",
        size: "A1",
        medium: "Acrylic_Painting",
        price: 80,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "All yellow ",
        image: "/images/media/gallery_pieces/All-Yellow.JPG",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 25,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Custom Anniversary ",
        image: "/images/media/gallery_pieces/Custom-Anniversary.jpg",
        size: "A4",
        medium: "Acrylic_Painting",
        price: 20,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Devi",
        image: "/images/media/gallery_pieces/Devi.jpg",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      },
      {
        title: "Eyes of wonder ",
        image: "/images/media/gallery_pieces/Eyes-of-Wonder.jpg",
        size: "A3",
        medium: "Acrylic_Painting",
        price: 40,
        status: "On_Sale",
        orientation: "portrait"
      }
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
