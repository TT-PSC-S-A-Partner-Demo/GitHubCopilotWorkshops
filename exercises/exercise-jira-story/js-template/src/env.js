import { z } from "zod";
import { config } from "dotenv";

config();

// Define the schema for environment variables
const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  PORT: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val), {
      message: "PORT must be a number",
    }),
});

// Validate the environment variables
const env = envSchema.safeParse(process.env);

if (!env.success) {
  console.error("Invalid environment variables:", env.error.format());
  process.exit(1);
}

export const safeEnv = env.data;
