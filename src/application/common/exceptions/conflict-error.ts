import { TRPCError } from '@trpc/server'

import { CommonErrorMessages } from '../responses'

export const conflictError = (
  message: string = CommonErrorMessages.UNEXPECTED
) => {
  return new TRPCError({
    code: 'CONFLICT',
    message
  })
}
