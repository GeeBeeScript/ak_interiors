// You can uncomment during development (comment was made for deployment)
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import "dotenv/config";

const adapter = new PrismaPg({
	connectionString: process.env.DATABASE_URL!,
});

declare global {
	var __prisma__: PrismaClient | undefined;
}

const db =
	global.__prisma__ ??
	new PrismaClient({
		adapter,
	});

if (process.env.NODE_ENV !== "production") {
	global.__prisma__ = db;
}

export default db;
export { db };
