import { TRPCError } from '@trpc/server'

import { CommonErrorMessages } from '../responses'

export const forbiddenError = (
  message: string = CommonErrorMessages.FORBIDDEN
) => {
  return new TRPCError({
    code: 'FORBIDDEN',
    message
  })
}
