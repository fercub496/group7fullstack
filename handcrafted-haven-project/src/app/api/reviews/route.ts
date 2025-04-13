// // src/app/api/reviews/route.ts
// import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export async function POST(req: Request) {
//   try {
//     const { rating, comment, productId } = await req.json();

//     if (!productId || rating < 1 || rating > 5) {
//       return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
//     }

//     const review = await prisma.review.create({
//       data: {
//         rating,
//         comment,
//         productId,
//       },
//     });

//     return NextResponse.json(review, { status: 200 });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Server error' }, { status: 500 });
//   }
// }
