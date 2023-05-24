import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StartupPage } from './pages/startup.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/error_page.tsx';
import './index.css';
import { theme } from './theme/index.ts';
import { Sheets } from './pages/sheets.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
	},
	{
		path: '/ee09_inf03/',
		element: <StartupPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/ee09_inf03/sheets',
		element: <Sheets />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider theme={extendTheme({ theme })}>
		<RouterProvider router={router} />
	</ChakraProvider>
);
