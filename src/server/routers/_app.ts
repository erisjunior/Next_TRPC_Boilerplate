import { z } from 'zod'

import { procedure, router } from '../trpc'

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        message: z.string()
      })
    )
    .query(async ({ input, ctx }) => {
      const count = await ctx.prisma.user.count()

      return {
        message: `Feedbacks: ${input.message}`,
        usersCount: count
      }
    }),

  createUser: procedure
    .input(
      z.object({
        name: z.string()
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.user.create({
        data: input
      })
    })
})

export type AppRouter = typeof appRouter
