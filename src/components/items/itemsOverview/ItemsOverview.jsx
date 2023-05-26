import './_itemsOverview.scss';

function ItemsOverview({items}) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<div className='items-overview'>
			<div>
				{items.map((item)=> (
					<div className='item' key={item.id}>
						<div className="img-container">
							<img src={PF+item.img} alt={item.name} />
						</div>
						<div className='main-info'>
							<h3 className='name'>{item.name}</h3>
							<p className='stock'>{item.stock} in stock</p>
							<p className='price'>€ {item.price}</p>
						</div>
						<div className='extra-info'>
							<p className="date-added">Date added: {item.added}</p>
							<p className="category">Category: {item.category}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default ItemsOverview;