import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

import { DefaultLayout } from '~/presentation/layouts'

import { ColorModeProvider } from './'

type Props = {
  children: React.ReactNode
  session: any
}

const ProviderComposition = ({ children, session }: Props) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>Boilerplate</title>
      </Head>
      <SessionProvider session={session}>
        <ColorModeProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </ColorModeProvider>
      </SessionProvider>
    </>
  )
}

export default ProviderComposition
