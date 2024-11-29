import './App.css';

// react router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// pages
import { Home, About, Contact } from './pages';

// layouts
import MainLayout from './layouts/MainLayout';

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <MainLayout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: '/about', element: <About /> },
				{ path: '/contact', element: <Contact /> },
			],
		},
	]);
	return <RouterProvider router={routes} />;
}

export default App;
