function required(name: string): string {
  const v = process.env[name]; // ← Node env; we installed @types/node
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export const env = {
  DATABASE_URL: required("DATABASE_URL"),
  API_KEY: required("API_KEY"),
  HASH_SALT: process.env.HASH_SALT || "rotate_me_regularly",
  ALLOWED_ORIGINS: (process.env.ALLOWED_ORIGINS || "https://agkb.in,https://kunalbansal.in,http://localhost:3000")
    .split(",")
    .map((s: string) => s.trim())   // ← add type on s
    .filter(Boolean),
};
