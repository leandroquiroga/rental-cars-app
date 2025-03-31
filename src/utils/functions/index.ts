import { z } from "zod"

// Check if the current path matches the href and if the theme is set to 'system'
export const resolveTheme = (theme: string, systemTheme: string) => theme === 'system' ? systemTheme : theme;

// Validate form data using Zod
export const formSchema = z.object({
  name: z.string().min(3).max(50),
  cv: z.string().min(3).max(50),
  transmission: z.string().min(3).max(50),
  people: z.string().min(1),
  photo: z.string().min(50).max(100),
  engine: z.string().min(3).max(50),
  type: z.string().min(3).max(50),
  priceDay: z.string().min(3).max(50),
  isPublish: z.boolean(),
})
