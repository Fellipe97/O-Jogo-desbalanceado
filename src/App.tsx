import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './themes/global'
import { defaultTheme } from './themes/default'

import { Router } from './Router'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export function App() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}