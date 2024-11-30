import { config } from 'dotenv';
config({ path: ".env" }); 
import { defineConfig } from "drizzle-kit";

config({ path: '.env.local' });


export default defineConfig({
  schema: "./app/Database/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
