import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

// globalThis.prisma: This global variabe ensures that the prisma client instance is reused across hot reloads during devlopment. without this, each time your application reloads, a new instance of the prisma client would be created, potentially loading to connection issues.
