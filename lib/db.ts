import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "./env";

console.log("DATABASE_URL at runtime:", env.DATABASE_URL?.slice(0, 50) + "...");

const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const db = drizzle(pool);
