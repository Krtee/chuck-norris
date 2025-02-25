import { prisma } from "@/utils/prismaClient";

const globalID = process.env.GLOBAL_ID;

/**
 *  fetches the visitor count from the global database
 * @returns the current visitor count
 * @onerror returns 0
 */
export const getVisitorCount = async (): Promise<number> => {
  const result = await prisma.global.findUnique({
    where: {
      id: globalID,
    },
  });

  if (!result) {
    return 0;
  }

  return result.visitorCount;
};
