import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react'
import './index.css'

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
}

// 3. extend the theme
const customTheme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={customTheme}>
    <App />
  </ChakraProvider>
)
