import { z } from 'zod'

export namespace Image {
  export const schema = z.object({
    id: z.string(),
    url: z.string(),
    key: z.string()
  })

  export const createImage = z.object({
    url: z.string(),
    key: z.string()
  })

  export type Model = z.infer<typeof schema>

  export enum Messages {
    CREATED = 'Image created successfully'
  }

  export const prisma = {}
}
