import { hash } from 'bcryptjs'

import { conflictError } from '~/application/common/exceptions'
import { User } from '~/application/models'
import { procedure } from '~/server'

export const signUp = procedure
  .input(User.signUpSchema)
  .output(User.schema)
  .mutation(async ({ input, ctx }) => {
    const exists = await ctx.prisma.user.findFirst({
      where: {
        OR: [{ email: input.email }, { phone: input.phone }]
      }
    })

    if (exists) {
      throw conflictError(User.Messages.CONFLICT)
    }

    const hashedPassword = await hash(input.password, 10)

    const response = await ctx.prisma.user.create({
      data: { ...input, password: hashedPassword },
      select: User.prisma.select
    })

    return response
  })
