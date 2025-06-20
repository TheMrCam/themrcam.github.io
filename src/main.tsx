import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

const theme = createTheme({})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='auto' theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
