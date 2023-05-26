import NextAuth from 'next-auth'

import { nextAuthOptions } from '~/application/config/auth'

export default NextAuth(nextAuthOptions)
