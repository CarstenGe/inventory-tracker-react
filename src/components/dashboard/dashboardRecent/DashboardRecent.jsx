import './_dashboardRecent.scss';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import settings from '../../../db-settings';

function DashboardRecent({items}) {

	const settingsRecent = settings.recentItems; // to check how many days in the past counts as recent
	const today = new Date(); 
	const pastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - settingsRecent);
	const recentItems = items.filter((item) => {
		const itemAddedDate = new Date(item.added);
		return itemAddedDate > pastWeek;
	});

	return (
		<div className='dashboard-recent'>
			<div className="top">
				<h2>Recently added items</h2>
				<Link to="/">View all</Link>
			</div>
			<div className="body">
				{recentItems.map((recentItem)=>(
					<div className='recent-item' key={recentItem.id}>
						<p className='name'>{recentItem.name}</p>
						<p className='price'>€ {recentItem.price}</p>
						<p className='view'><Link to='/'><VisibilityIcon /></Link></p>
					</div>
				))}
			</div>
		</div>
	);
}

export default DashboardRecent;