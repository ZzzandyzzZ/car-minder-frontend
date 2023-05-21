import type { AppProps } from 'next/app'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CacheProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import blueTheme from '@theme/blueTheme'
import createEmotionCache from '@theme/createEmotionCache'

import '@fontsource/roboto/700.css'
import 'global.css'
import { Provider } from 'react-redux'
import { store } from 'store/store'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function CarMinderApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={blueTheme}>
          <Provider store={store}>
            <CssBaseline />
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  )
}
