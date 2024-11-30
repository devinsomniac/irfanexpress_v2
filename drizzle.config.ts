import { config } from 'dotenv';
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });

const databaseUrl = "postgresql://IrfanExpress_owner:IfQFLuXkS3p1@ep-autumn-sun-a5ajakr9.us-east-2.aws.neon.tech/IrfanExpress?sslmode=require";

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment variables.");
}

export default defineConfig({
  schema: "./app/Database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.AUTH_DRIZZLE_URL!,
  },
});
