// drizzle.config.ts
import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/schema.ts",
  out: "./drizzle",
  connectionString: process.env.DATABASE_URL || "", // ✅ directly here
} satisfies Config;
