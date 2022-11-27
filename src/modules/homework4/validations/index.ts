import { z } from "zod";

import { fuelData } from "../constants";

export const BrandSchema = z.enum([
  "mercedes-benz",
  "bmw",
  "audi",
  "maserati",
  "roles-roles",
  "jaguar",
]);

export const CarSchema = z.object({
  model: z
    .string()
    .min(2, { message: "Model should have at least 2 letters" })
    .max(20),
  brand: BrandSchema,
  kmDriven: z.number().min(0).max(100000),
  price: z.number().min(0).max(100000),
  fuel: z.enum(fuelData),
});
