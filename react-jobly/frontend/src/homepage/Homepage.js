import React, { useContext } from 'react';
import UserContext from '../auth/UserContext';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import './Homepage.css';

/** Homepage of site.
 *  
 *  Shows welcome message or login/register buttons.
 *  
 * Routed at /
 * 
 * Routes -> Homepage
 */

function Homepage() {
  const { currentUser } = useContext(UserContext);
  console.debug('Homepage', 'currentUser=', currentUser);

  return (
  <div className="Homepage-container">
    <div className="Homepage">
      <div className="text-container">
        <h1 className="mb-4 font-weight-bold mt-5">Find and apply for the best jobs with Jobly.</h1>
        <p className="lead">All the jobs in one, convenient place.</p>
        {currentUser
          ? <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
          : (
            <div>
              <Link to="/login" className='ml-3'>
                    <Button color="primary">Login</Button>
               </Link>
              <Link to="/signup" className='ml-3'>
                 <Button color="primary" >Sign Up</Button>
              </Link>
              <p className="mt-3">Demo Login: username: testuser password: password</p>

            </div>
          )}
      </div>
      <div className="image-container">
              <img src={`${process.env.PUBLIC_URL}/home_hero.svg`} alt="home hero illustration" className="homepage-image" />
      </div>
    </div>
    </div>
  );
}

export default Homepage;


