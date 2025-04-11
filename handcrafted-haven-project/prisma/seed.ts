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
        image: "https://example.com/ceramic-vase.jpg",
      },
      {
        name: "Silver Handmade Ring",
        category: "Jewelry",
        price: 59.99,
        image: "https://example.com/silver-ring.jpg",
      },
      {
        name: "Woven Wool Blanket",
        category: "Textiles",
        price: 79.99,
        image: "https://example.com/wool-blanket.jpg",
      },
      {
        name: "Handcrafted Wooden Spoon Set",
        category: "Wood",
        price: 19.99,
        image: "https://example.com/wooden-spoons.jpg",
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
