const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      {
        name: "Handmade Wooden Bowl",
        category: "Wood",
        price: 29.99,
        image: "/products/handmade-wooden-bowl.jpg",
      },
      {
        name: "Ceramic Vase",
        category: "Ceramic",
        price: 39.99,
        image: "/products/ceramic-vase.webp",
      },
      {
        name: "Silver Handmade Ring",
        category: "Jewelry",
        price: 59.99,
        image: "/products/silver-handmade-ring.webp",
      },
      {
        name: "Woven Wool Blanket",
        category: "Textiles",
        price: 79.99,
        image: "/products/woven-wool-blanket.webp",
      },
      {
        name: "Handcrafted Wooden Spoon Set",
        category: "Wood",
        price: 19.99,
        image: "/products/handcrafted-wooden-spoon-set.webp",
      },
    ],
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
