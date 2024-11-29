// react router dom
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components';

const MainLayout = () => {
	return (
		<>
    <Navbar/>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default MainLayout;
