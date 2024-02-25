import React, { useContext } from 'react';
import UserContext from '../auth/UserContext';
import { Route, Redirect } from 'react-router-dom';

/** Higher-order component for private routes.
 * 
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 *  
 * 
 * Props:
 * - path: path for route
 * - exact: should this route only match exact path?
 * - children: component to wrap
 * 
 * State:
 * - none
 * 
 * Context:
 * - currentUser: has current user info
 */

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);

    console.debug(
        "PrivateRoute",
        "exact=", exact,
        "path=", path,
        "currentUser=", currentUser,
    );

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    );
}

export default PrivateRoute;