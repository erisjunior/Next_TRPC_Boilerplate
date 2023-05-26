import * as userServices from '~/application/services/user'
import { router } from '~/server'

export const serverRouter = router({
  ...userServices
})

export type ServerRouter = typeof serverRouter
