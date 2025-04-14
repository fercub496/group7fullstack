import { Product } from "./definitions";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const products = await prisma.$queryRawUnsafe(`
            SELECT *
            FROM "Product"
            ${query ? `WHERE category = '${query}'` : ""}
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset} 
        `)
    

    return products;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchProductsPages(query: string) {
  try {
    const products = await prisma.$queryRawUnsafe(`
            SELECT count(*)
            FROM "Product"
            ${query ? `WHERE category = '${query}'` : ""}   
        `)
    const totalPages = Math.ceil(Number(products[0].count) / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}