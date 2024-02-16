import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './HomePage.css';

/** Homepage of site.
 *  
 *  Shows welcome message or login/register buttons.
 *  
 * Routed at /
 * 
 * Routes -> Homepage
 */

function Homepage() {
  return (
  <div className="Homepage-container">
    <div className="Homepage">
      <div className="text-container">
        <h1 className="mb-4 font-weight-bold mt-5">Chat and share with Yodlr.</h1>
        <p className="lead">A simple way to connect with your team.</p>
            <div>
              <Link to="/signup" className='ml-3'>
                 <Button color="primary" >Sign Up</Button>
              </Link>
            </div>
      </div>
      <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/home_hero.svg`} alt="home hero illustration" className="homepage-image" />
      </div>
    </div>
    </div>
  );
}

export default Homepage;


