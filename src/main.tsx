import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import routeNodes from './routes.tsx';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={routeNodes} />
	</StrictMode>
);
