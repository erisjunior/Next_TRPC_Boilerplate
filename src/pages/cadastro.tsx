import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import { Routes } from '~/presentation/common/router'
import { Register } from '~/presentation/pages'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: {
        destination: Routes.HOME,
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Register
