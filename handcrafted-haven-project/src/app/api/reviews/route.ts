import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('Received review data:', body);

    const { rating, comment, productId } = body;

    // Very basic validation
    if (!rating || !comment || !productId) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }
     
    const review = await prisma.review.create({
        data: {
          rating: Number(rating),
          comment,
          product: {
            connect: { id: productId }}
        },
      });

    
    
    return NextResponse.json({ message: 'Review saved!', review }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}