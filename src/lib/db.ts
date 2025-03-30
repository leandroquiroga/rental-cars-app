/* eslint-disable @typescript-eslint/no-explicit-any */
import { PrismaClient } from '@prisma/client';

// 1. Extendemos el tipo de globalThis para evitar el uso de any
declare global {
  interface globalThis {
    prisma?: PrismaClient;
  }
}

// 2. Declaramos la variable prisma con su tipo
let prisma: PrismaClient;

// 3. Creamos o reutilizamos la instancia según el entorno
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(globalThis as any).prisma) {
    (globalThis as any).prisma = new PrismaClient();
  }
  prisma = (globalThis as any).prisma;
}

// 4. Manejo de cierre de conexiones
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});


export default prisma;