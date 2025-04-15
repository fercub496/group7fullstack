
import { PrismaClient } from "@prisma/client";
import { Seller, Product, NumElem } from '@/app/lib/definitions';

const prisma = new PrismaClient();

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredProducts(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const products = await prisma.$queryRawUnsafe<Product[]>(`
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
    const products = await prisma.$queryRawUnsafe<Array<NumElem>>(`
            SELECT count(*)
            FROM "Product"
            ${query ? `WHERE category = '${query}'` : ""}   
        `)

    const product = products[0].count;
    const prodNum = product.toString().replace("n", "");    
    const totalPages = Math.ceil(Number(prodNum) / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
}

export async function fetchFilteredSellers(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    const products = await prisma.$queryRawUnsafe<Seller[]>(`
            SELECT *
            FROM "Seller"
            ${query ? `WHERE name ILIKE '%${query}%'` : ""} 
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset} 
        `)
    

    return products;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
}

export async function fetchSellersPages(query: string) {
  try {
    const sellers = await prisma.$queryRawUnsafe<Array<NumElem>>(`
            SELECT count(*)
            FROM "Seller"
            ${query ? `WHERE name ILIKE '%${query}%'` : ""}   
        `)

    const seller = sellers[0].count;
    const sellNum = seller.toString().replace("n", "");
   
    const totalPages = Math.ceil(Number(sellNum) / ITEMS_PER_PAGE);
    return totalPages;

  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of sellers.');
  }
}