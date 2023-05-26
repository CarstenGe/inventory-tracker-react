import { Link } from 'react-router-dom';
import './_header.scss';

function Header(props) {
	return (
		<div className='header'>
			<div className="menu">
				<ul>
					<li className='active'><Link to="/">Dashboard</Link></li>
					<li><Link to="/">Items</Link></li>
					<li><Link to="/">Settings</Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Header;