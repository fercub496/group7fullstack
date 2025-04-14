const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {

  await prisma.product.createMany({
    data: [
      {
        name: "Walnut Cutting Board",
        category: "Wood",
        price: 35.50,
        image: "/products/walnut-cutting-board.webp",
        seller: "Timber Touch",
        sellerimage: "/sellers/timber-touch.webp",
      },
      {
        name: "Carved Wooden Spoon",
        category: "Wood",
        price: 12.99,
        image: "/products/carved-wooden-spoon.webp",
        seller: "NatureCrafted",
        sellerimage: "/sellers/naturecrafted.webp",
      },
      {
        name: "Maple Jewelry Box",
        category: "Wood",
        price: 45.00,
        image: "/products/maple-jewelry-box.webp",
        seller: "WoodWhisperer",
        sellerimage: "/sellers/woodwhisperer.webp",
      },
      {
        name: "Reclaimed Wood Frame",
        category: "Wood",
        price: 20.00,
        image: "/products/reclaimed-wood-frame.webp",
        seller: "Artisan Haven",
        sellerimage: "/sellers/artisan-haven.webp",
      },
      {
        name: "Hand-painted Vase",
        category: "Ceramic",
        price: 40.00,
        image: "/products/hand-painted-vase.webp",
        seller: "Earthy Essence",
        sellerimage: "/sellers/earthy-essence.webp",
      },
      {
        name: "Ceramic Planter Set",
        category: "Ceramic",
        price: 30.00,
        image: "/products/ceramic-planter-set.webp",
        seller: "Terra Studios",
        sellerimage: "/sellers/terra-studios.webp",
      },
      {
        name: "Porcelain Tea Set",
        category: "Ceramic",
        price: 55.00,
        image: "/products/porcelain-tea-set.webp",
        seller: "The Pottery Den",
        sellerimage: "/sellers/the-pottery-den.webp",
      },
      {
        name: "Minimalist Plate Set",
        category: "Ceramic",
        price: 25.99,
        image: "/products/minimalist-place-set.webp",
        seller: "Craft & Clay",
        sellerimage: "/sellers/craft-and-clay.webp",
      },
      {
        name: "Beaded Bracelet",
        category: "Jewelry",
        price: 15.00,
        image: "/products/beaded-bracelet.webp",
        seller: "Luna Loom",
        sellerimage: "/sellers/luna-loom.webp",
      },
      {
        name: "Handmade Copper Pendant",
        category: "Jewelry",
        price: 28.75,
        image: "/products/handmade-copper-pendant.webp",
        seller: "Artisan Metals",
        sellerimage: "/sellers/artisan-metals.webp",
      },
      {
        name: "Macramé Choker",
        category: "Jewelry",
        price: 12.00,
        image: "/products/macrame-choker.webp",
        seller: "Threads & Charms",
        sellerimage: "/sellers/threads-and-charms.webp",
      },
      {
        name: "Gold Plated Earrings",
        category: "Jewelry",
        price: 35.00,
        image: "/products/gold-plated-earrings.webp",
        seller: "Bold Baubles",
        sellerimage: "/sellers/bold-baubles.webp",
      },
      {
        name: "Embroidered Cushion Cover",
        category: "Textiles",
        price: 22.99,
        image: "/products/embroidered-cushion-cover.webp",
        seller: "Cozy Nest",
        sellerimage: "/sellers/cozy-nest.webp",
      },
      {
        name: "Woolen Scarf",
        category: "Textiles",
        price: 30.00,
        image: "/products/woolen-scarfw.webp",
        seller: "Threaded Tales",
        sellerimage: "/sellers/threaded-tales.webp",
      },
      {
        name: "Patchwork Quilt",
        category: "Textiles",
        price: 75.00,
        image: "/products/patchwork-quilt.webp",
        seller: "Warm & Woven",
        sellerimage: "/sellers/warm-and-woven.webp",
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
