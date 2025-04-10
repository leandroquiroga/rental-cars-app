import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


type Methods = 'findUnique' | 'findByMany' | 'create';
type OrderBy = 'asc' | 'desc';

export async function GET(request: Request) {

  const { userId } = await auth();
  if (!userId) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(request.url);
  const method = searchParams.get('method') as Methods;
  const orderByRaw = searchParams.get('orderBy') as OrderBy;
  const id = searchParams.get('id') as string;

  const orderBy = orderByRaw ? { createdAt: orderByRaw } : undefined;

  if (orderByRaw && !['asc', 'desc'].includes(orderByRaw)) return NextResponse.json({ message: 'orderBy inválido' }, { status: 400 });

  try {
    switch (method) {
      case 'findUnique':
        const getCarUnique = await prisma.car.findUnique({ where: { id } });
        return NextResponse.json(getCarUnique);
      case 'findByMany':
        const getCars = await prisma.car.findMany({ where: { userid: userId }, orderBy });
        return NextResponse.json(getCars);
      default:
        return NextResponse.json({ message: 'Método no soportado' }, { status: 400 });
    }
  } catch (error) {
    console.error("[CARS]", error);
    return NextResponse.json({ message: 'Error en la base de datos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    };
    const data = await request.json();
    const car = await prisma.car.create({
      data: {
        userid: userId,
        ...data,
      }
    });
    return NextResponse.json({ message: "Car created successfully", car }, { status: 201 });
  } catch (error) {
    console.error("[CAR]", error);
    return NextResponse.json({ message: "Error creating car" }, { status: 500 });
  }
};