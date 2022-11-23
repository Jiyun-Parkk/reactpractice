import React from 'react'
import ReactDOM from 'react-dom/client'
import { dark, light } from 'style/theme'
import { ThemeProvider } from 'styled-components'
import App from './App'
import GlobalStyle from './style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>
)
