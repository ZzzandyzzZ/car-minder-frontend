import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CacheProvider } from '@emotion/react'
import { es } from 'date-fns/locale'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import { type AppProps } from 'next/app'

import { store } from 'store/store'
import blueTheme from '@theme/blueTheme'
import createEmotionCache from '@theme/createEmotionCache'

import CssBaseline from '@mui/material/CssBaseline'
import '@fontsource/roboto/700.css'
import 'global.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function CarMinderApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
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
