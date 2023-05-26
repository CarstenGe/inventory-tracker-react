import './_footer.scss';

function Footer(props) {
	return (
		<div className='footer'>
			<div className="footer-col">
				<h3>Inventory Tracker</h3>
			</div>
			<div className="footer-col">
				<h4>Disclaimer</h4>
				<p>This is only a frontend with dummy data. All resemblance to an actual company or stock is purely coincidental. So feel free to take a look around and click everything.</p>
			</div>
		</div>
	);
}

export default Footer;