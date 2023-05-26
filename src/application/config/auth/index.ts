import { compare } from 'bcryptjs'
import { NextAuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { User } from '~/application/models'
import { Routes } from '~/presentation/common/router'
import { prisma } from '~/server/prisma'

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email'
        },
        password: {
          label: 'Password',
          type: 'password'
        }
      },
      authorize: async (credentials) => {
        const { email, password } = await User.signInSchema.parseAsync(
          credentials
        )

        const user = await prisma.user.findFirst({
          where: { email }
        })

        if (!user) {
          return null
        }

        const isValidPassword = await compare(password, user.password)

        if (!isValidPassword) {
          return null
        }

        return {
          id: user.id,
          email: user.email
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user
      }

      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user
      }

      return session
    }
  },
  jwt: {
    maxAge: 15 * 24 * 30 * 60
  },
  pages: {
    signIn: Routes.LOGIN,
    error: Routes.NOT_FOUND
  }
}
