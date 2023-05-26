import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'

import { env } from '~/application/config/env'
import type { ServerRouter } from '~/server/router'

function getBaseUrl(): string {
  if (typeof window !== 'undefined') return ''

  return env.APP_URL ?? ''
}

export const trpcNext = createTRPCNext<ServerRouter>({
  config() {
    return {
      links: [
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`
        })
      ]
    }
  },
  ssr: true
})
