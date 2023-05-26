import { Prisma } from '@prisma/client'
import { z } from 'zod'

import { phoneSchema } from '~/application/common/schemas'

export namespace User {
  export const schema = z.object({
    email: z.string().email(),
    fullName: z.string(),
    phone: phoneSchema.nullable()
  })
  export const signInSchema = z.object({
    email: z.string().email('Insira um email válido'),
    password: z.string().min(6, 'Insira uma senha com no mínimo 6 caracteres')
  })
  export const signUpSchema = signInSchema.extend({
    fullName: z.string(),
    phone: phoneSchema.optional()
  })

  export type Model = z.infer<typeof schema>
  export type SignInModel = z.infer<typeof signInSchema>
  export type SignUpModel = z.infer<typeof signUpSchema>

  export enum Messages {
    CREATED = 'User created successfully',
    CONFLICT = 'One of the following informations are already in use: Email or Phone'
  }

  export const prisma = {
    select: Prisma.validator<Prisma.UserSelect>()({
      email: true,
      fullName: true,
      phone: true
    }),
    includeImage: Prisma.validator<Prisma.UserInclude>()({
      image: true
    })
  }
}
