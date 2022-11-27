import { z } from "zod";

import { CarSchema } from "../validations";

export type CarSchemaType = z.infer<typeof CarSchema>;

export type CarList = CarSchemaType[];

export interface CarFilterType {}
