import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request) {
  try {
    // Extract query params from the request URL
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category"); // Get the category filter

    // Raw SQL query to filter products
    const products = await prisma.$queryRawUnsafe(`
      SELECT * FROM "Product"
      ${category ? `WHERE category = '${category}'` : ""}
    `);

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 });
  }
}
