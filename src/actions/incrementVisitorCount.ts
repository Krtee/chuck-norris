"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../utils/prismaClient";

const globalID = process.env.GLOBAL_ID;

/**
 * Increments the visitor count in the global database file by 1 and returns the new count
 * @returns the updated visitor count
 * @onerror returns 0
 */
export const incrementVisitorCount = async (): Promise<number> => {
  const result = await prisma.global.update({
    where: {
      id: globalID,
    },
    data: {
      visitorCount: {
        increment: 1,
      },
    },
  });

  if (!result) {
    return 0;
  }

  revalidatePath("/");
  return result.visitorCount;
};
