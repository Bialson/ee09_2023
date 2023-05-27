import ReactDOM from 'react-dom/client';
// import App from './App.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StartupPage } from './pages/startup.tsx';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ErrorPage } from './pages/error_page.tsx';
import './index.css';
import { theme } from './theme/index.ts';
import { Sheets } from './pages/sheets.tsx';

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const router = createHashRouter([
	{
		path: '/*',
		element: <StartupPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/sheets',
		element: <Sheets />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ChakraProvider theme={extendTheme({ theme })}>
		<RouterProvider router={router} />
	</ChakraProvider>
);
