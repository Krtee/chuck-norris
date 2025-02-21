import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 *  Creates a PrismaClient with the accelerate extension
 * @returns A PrismaClient with the accelerate extension
 */
const prismaClientSingleton = () => {
  return new PrismaClient().$extends(withAccelerate());
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
};

/**
 * this ensures that the prisma client is only created once
 */
const prisma =
  globalThis.prismaGlobal ||
  (globalThis.prismaGlobal = prismaClientSingleton());

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
