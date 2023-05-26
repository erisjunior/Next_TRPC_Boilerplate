// eslint-disable-next-line
import 'next-auth'

declare module 'next-auth' {
  interface Session {
    id: any
    user: {
      id: string
      email: string
    } & DefaultSession['user']
  }
}
