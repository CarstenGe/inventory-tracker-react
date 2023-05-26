import './_items.scss';
import items from '../../db-items';
import ItemsSidebar from './itemsSidebar/ItemsSidebar';
import ItemsOverview from './itemsOverview/ItemsOverview';

function Items(props) {
	return (
		<div className='items'>
			<ItemsSidebar items={items} />
			<ItemsOverview items={items} />
		</div>
	);
}

export default Items;