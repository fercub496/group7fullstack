import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { rating, comment, productId } = body;

    console.log('Incoming data:', { rating, comment, productId });

    if (!rating || !comment || !productId) {
      return NextResponse.json({ message: 'Missing fields' }, { status: 400 });
    }

    const review = await prisma.review.create({
      data: {
        rating,
        comment,
        productId,
      },
    });

    console.log('Review created:', review);

    return NextResponse.json({ message: 'Review saved!', review }, { status: 200 });
  } catch (error) {
    console.error('Failed to save review:', error); // <-- this will show what really went wrong
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

