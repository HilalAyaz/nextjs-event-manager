import { z } from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z
    .string()
    .min(5, {
      message: "Description must be at least 5 characters.",
    })
    .max(800, {
      message: "Description must be at most 800 characters.",
    }),
  location: z
    .string()
    .min(5, {
      message: "Location must be at least 5 characters.",
    })
    .max(200, {
      message: "Location must be at most 200 characters.",
    }),
  imageUrl: z.string().url(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
