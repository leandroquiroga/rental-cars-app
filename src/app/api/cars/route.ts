import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


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