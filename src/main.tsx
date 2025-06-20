import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.tsx'
import { createTheme, type MantineColorsTuple, MantineProvider } from '@mantine/core'

import '@mantine/core/styles.css'

const hobu: MantineColorsTuple = [
  '#e7f7ff',
  '#d7e9f8',
  '#b2d0e9',
  '#89b5da',
  '#679fce',
  '#5190c7',
  '#4188c4',
  '#3377ae',
  '#27699d',
  '#115b8c',
]

const theme = createTheme({
  colors: { hobu },
  primaryColor: 'hobu',
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='auto' theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
