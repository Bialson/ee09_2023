import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { ChakraProvider, } from '@chakra-ui/react'
import './index.css'
import StartupPage from './pages/startup.tsx'
import theme from './theme/index.ts'

// const config: ThemeConfig = {
//   useSystemColorMode: false,
//   initialColorMode: "dark",
// }

// // 3. extend the theme
// const customTheme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <StartupPage />
  </ChakraProvider>
)
