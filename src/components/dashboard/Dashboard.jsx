import './_dashboard.scss';
import DashboardGraph from './dashboardGraph/DashboardGraph';
import DashboardLowStock from './dashboardLowStock/DashboardLowStock';
import DashboardRecent from './dashboardRecent/DashboardRecent';
import items from '../../db-items';
import DashboardGraphBar from './dashboardGraphBar/DashboardGraphBar';

function Dashboard(props) {
	return (
		<div className='dashboard'>
			<div className="dashboard-item">
				<DashboardRecent items={items} />
			</div>
			<div className="dashboard-item">
				<DashboardLowStock items={items} />
			</div>
			<div className="dashboard-item">
				<DashboardGraph />
			</div>
			<div className="dashboard-item">
				<DashboardGraphBar />
			</div>
		</div>
	);
}

export default Dashboard;