// import { prisma } from "@/prisma/prisma-client";
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//     const query = req.nextUrl.searchParams.get('query') || '';

//     const products = await prisma.product.findMany({
//         where: {
//             name: {
//                 contains: query,
//                 mode: 'insensitive',
//             },
//         },
//         take: 5,
//     });

//     return NextResponse.json(products);
// }

import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const query = req.nextUrl.searchParams.get('query') || '';

    const lowerQuery = query.toLowerCase(); // Приводим запрос к нижнему регистру

    const products = await prisma.product.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: lowerQuery, // Поиск по строчной версии
                        mode: 'insensitive',
                    },
                },
                {
                    name: {
                        contains: query, // Поиск по изначальной версии
                        mode: 'insensitive',
                    },
                },
            ],
        },
        take: 5,
    });

    return NextResponse.json(products);
}

