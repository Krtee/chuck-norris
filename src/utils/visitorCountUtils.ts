import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

/**
 * Initializes the Prisma client with the accelerate extension
 */
const prisma = new PrismaClient().$extends(withAccelerate());

/**
 * Increments the visitor count in the global database file by 1 and returns the new count
 * @returns the updated visitor count
 */
export const incrementVisitorCount = async () => {
  const result = await prisma.global.update({
    where: {
      id: "chuck-norris",
    },
    data: {
      visitorCount: {
        increment: 1,
      },
    },
  });

  return result.visitorCount;
};
