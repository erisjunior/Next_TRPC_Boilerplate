import Head from 'next/head'

import { trpc } from '../utils/trpc'

export default function Home() {
  const hello = trpc.hello.useQuery({ message: 'client' })

  return (
    <div>
      <Head>
        <title>Boilerplate</title>
        <meta name='description' content='Boilerplate' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {!hello.data ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>{hello.data.message}</p>
            <p>{hello.data.usersCount}</p>
          </div>
        )}
      </main>
    </div>
  )
}
