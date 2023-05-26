import * as TRPCNextAdapter from '@trpc/server/adapters/next'

import { createContext } from '~/server/context'
import { serverRouter } from '~/server/router'

export default TRPCNextAdapter.createNextApiHandler({
  router: serverRouter,
  createContext
})
