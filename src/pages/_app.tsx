import '@fontsource/poppins'
import type { AppType } from 'next/app'

import '../styles/globals.css'
import { trpc } from '../utils/trpc'

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default trpc.withTRPC(App)
