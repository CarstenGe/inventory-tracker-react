import './_dashboardLowStock.scss';
import {Link} from 'react-router-dom';
import settings from '../../../db-settings';
import VisibilityIcon from '@mui/icons-material/Visibility';

function DashboardLowStock({items}) {

	const lowStockItems = items.filter((item)=>item.stock < settings.lowStockCount);

	return (
		<div className='dashboard-low-stock'>
			<div className="top">
				<h2>Low stock</h2>
				<Link to="/">View all</Link>
			</div>
			<div className="body">
				{lowStockItems.map((lowStockItem)=> (
					<div className='stock-item'>
						<p className='name'>{lowStockItem.name}</p>
						<p className={`stock ${lowStockItem.stock < settings.veryLowStockCount ? 'very-low' : 'low'}`}>{lowStockItem.stock}</p>
						<p className='view'><Link to='/'><VisibilityIcon /></Link></p>
					</div>
				))}
			</div>
		</div>
	);
}

export default DashboardLowStock;