import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const sellers = await prisma.$queryRawUnsafe(`
      SELECT * FROM "Seller"
    `);

    return NextResponse.json(sellers, { status: 200 });
  } catch (error) {
    console.error("Error fetching sellers:", error);
    return NextResponse.json({ error: "Error fetching sellers" }, { status: 500 });
  }
}
