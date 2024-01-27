import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';
import './404.css';

/**Displays 404 page.
 * 
 */

const NotFound = () => {
	return (
		<section>
			<Card className="NotFound">
				<CardBody className="text-center">
					<CardTitle>
						<h3 className="font-weight-bold">Page does not exist!</h3>
						<div className="Links">
							<Link to="/">Home</Link>
							<Link to="/snacks">Snacks</Link>
							<Link to="/drinks">Drinks</Link>
							<Link to="/add">Add Item</Link>
							<Link to="/contact">Contact</Link>

						</div>
					</CardTitle>
				</CardBody>
			</Card>
		</section>
	);
};

export default NotFound;