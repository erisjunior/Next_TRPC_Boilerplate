import { TRPCError } from '@trpc/server'

import { CommonErrorMessages } from '../responses'

export const badRequestError = (
  message: string = CommonErrorMessages.UNEXPECTED
) => {
  return new TRPCError({
    code: 'BAD_REQUEST',
    message
  })
}
