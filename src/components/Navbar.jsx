import { useEffect, useState } from 'react';
// react router dom
import { Link } from 'react-router-dom';

// react icons
import { FcStackOfPhotos } from 'react-icons/fc';
import { FaHeart, FaSun, FaMoon } from 'react-icons/fa';

//components
import { NavLinks } from './';

const themeFromLocalStore = () => {
	return localStorage.getItem('theme') || 'winter';
};

const Navbar = () => {
	const [theme, setTheme] = useState(themeFromLocalStore());

	const toggleTheme = () => {
		const newTheme = theme === 'winter' ? 'dracula' : 'winter';
		setTheme(newTheme);
	};

	useEffect(() => {
		// DOM mavjudligini tekshirish
		if (typeof document !== 'undefined' && document.documentElement) {
			localStorage.setItem('theme', theme);
			document.documentElement.setAttribute('data-theme', theme);
		} else {
			console.error('document is undefined or document.documentElement is not accessible');
		}
	}, [theme]);

	return (
		<header className='bg-base-200'>
			<div className='navbar ailign-elements'>
				<div className='navbar-start'>
					<Link to={'/'} className='hidden md:flex'>
						<FcStackOfPhotos className='w-10 h-10' />
					</Link>

					<div className='dropdown md:hidden'>
						<div tabIndex={0} role='button'>
							<FcStackOfPhotos className='w-10 h-10' />
						</div>
						<ul tabIndex={0} className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden md:flex'>
					<ul className='menu menu-horizontal rounded-box'>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end flex items-center gap-3'>
					<Link to={'/likedImages'}>
						<div className='indicator'>
							<span className='indicator-item badge badge-secondary badge-sm'>0</span>
							<FaHeart className='w-6 h-6' />
						</div>
					</Link>

					<label className='swap swap-rotate'>
						<input type='checkbox' onClick={toggleTheme} />
						<FaSun className='swap-off h-6 w-6 fill-current' />
						<FaMoon className='swap-on h-6 w-6 fill-current' />
					</label>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
