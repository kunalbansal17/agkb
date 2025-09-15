# generate migrations
npx drizzle-kit generate:pg --out ./drizzle

# apply migrations
npx drizzle-kit push:pg
