import '@uploadthing/react/styles.css'
import type { AppProps } from 'next/app'

import { trpcNext } from '~/application/config/trpc-next'
import { ProviderComposition } from '~/presentation/providers'
import '~/presentation/styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ProviderComposition session={pageProps.session}>
      <Component {...pageProps} />
    </ProviderComposition>
  )
}

export default trpcNext.withTRPC(App)
