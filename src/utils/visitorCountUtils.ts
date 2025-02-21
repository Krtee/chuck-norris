"use server";

import { prisma } from "./prismaClient";

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
