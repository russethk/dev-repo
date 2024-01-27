import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from '../homepage/Homepage';
import CompanyList from '../companies/CompanyList';
import CompanyDetail from '../companies/CompanyDetail';
import JobList from '../jobs/JobList';
import LoginForm from '../forms/LoginForm';
import SignUpForm from '../forms/SignUpForm';
import ProfileForm from '../forms/ProfileForm';
import Protected from './ProtectedRoute';

/** Site-wide routes.
 *
 * Parts of site are only visitable when logged in. Those routes are
 * wrapped by <Protected>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */

const Routes = ({ login, signup, deleteUser }) => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/login">
          <LoginForm login={login} />
        </Route>

        <Route exact path="/signup">
          <SignUpForm signup={signup} />
        </Route>

        <Protected exact path="/companies">
          <CompanyList />
        </Protected>

        <Protected exact path="/companies/:handle">
          <CompanyDetail />
        </Protected>

        <Protected exact path="/jobs">
          <JobList />
        </Protected>

        <Protected exact path="/profile">
          <ProfileForm deleteUser={deleteUser} />
        </Protected>

        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Routes;
