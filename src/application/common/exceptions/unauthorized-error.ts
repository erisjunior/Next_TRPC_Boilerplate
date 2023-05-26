import { TRPCError } from '@trpc/server'

import { CommonErrorMessages } from '../responses'

export const unauthorizedError = (
  message: string = CommonErrorMessages.UNAUTHORIZED
) => {
  return new TRPCError({
    code: 'UNAUTHORIZED',
    message
  })
}
