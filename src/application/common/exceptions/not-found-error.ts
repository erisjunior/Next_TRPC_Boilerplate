import { TRPCError } from '@trpc/server'

import { CommonErrorMessages } from '../responses'

export const notFoundError = (
  message: string = CommonErrorMessages.NOT_FOUND
) => {
  return new TRPCError({
    code: 'NOT_FOUND',
    message
  })
}
