import { z } from "zod";

export const dotcvConfigSchema = z.object({
  theme: z.string().default("classic"),
  locale: z.string().default("en"),
  pdf: z
    .object({
      theme: z.string().optional(),
      format: z.enum(["a4", "letter"]).default("a4"),
      showAtsButton: z.boolean().default(true),
      showDesignButton: z.boolean().default(true),
      filename: z.string().optional(),
    })
    .optional()
    .default({
      format: "a4",
      showAtsButton: true,
      showDesignButton: true,
    }),
});

export type DotcvConfig = z.infer<typeof dotcvConfigSchema>;
