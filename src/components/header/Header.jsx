import { Link } from 'react-router-dom';
import './_header.scss';

function Header(props) {
	return (
		<div className='header'>
			<div className="menu">
				<ul>
					<li><Link to="/">Dashboard</Link></li>
				</ul>
			</div>
		</div>
	);
}

export default Header;