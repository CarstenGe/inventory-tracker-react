import { Link, useLocation } from 'react-router-dom';
import './_header.scss';

function Header(props) {
	const location = useLocation();
	
	return (
		<div className='header'>
			<div className="menu">
				<ul>
				<li className={location.pathname === "/" ? 'active' : ''}>
					<Link to="/">Dashboard</Link>
				</li>
				<li className={location.pathname === "/items" ? 'active' : ''}>
					<Link to="/items">Items</Link>
				</li>
				<li className={location.pathname === "/settings" ? 'active' : ''}>
					<Link to="/settings">Settings</Link>
				</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;