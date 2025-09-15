import { pgTable, text, timestamp, boolean, uuid, bigserial, jsonb } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: text("code").notNull().unique(),
  url: text("url").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  createdBy: text("created_by"),
  isActive: boolean("is_active").default(true).notNull(),
  meta: jsonb("meta"),
});

export const clicks = pgTable("clicks", {
  id: bigserial("id", { mode: "number" }).primaryKey(),  // ← fix
  linkId: uuid("link_id").notNull().references(() => links.id, { onDelete: "cascade" }),
  ts: timestamp("ts", { withTimezone: true }).defaultNow().notNull(),
  referrer: text("referrer"),
  ua: text("ua"),
  ipHash: text("ip_hash"),
  country: text("country"),
  region: text("region"),
  city: text("city"),
  deviceType: text("device_type"),
  bot: boolean("bot").default(false).notNull(),
});

export type Link = typeof links.$inferSelect;
export type Click = typeof clicks.$inferSelect;
