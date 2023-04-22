import type { AppProps } from 'next/app'

import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import blueTheme from '@theme/blueTheme'
import createEmotionCache from '@theme/createEmotionCache'
import '@styles/globals.css'
// import '@fontsource/roboto/300.css'
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css'

// Client-side cache, shared for the whole session of the user in the browser.

const clientSideEmotionCache = createEmotionCache()

export default function CarMinderApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={blueTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
