import type { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import { Home } from '~/presentation/pages'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  return {
    props: {
      session
    }
  }
}

export default Home
