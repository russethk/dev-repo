import React from 'react';
import UserSignUp from './UserSignUp';
import Admin from './Admin';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import UserPage from './UserPage';
import Homepage from './Homepage';
import NavBar from './NavBar';
import {Redirect} from 'react-router-dom';
import './App.css';

const App = () => {

    return (
        <div className="pt-5">
         <BrowserRouter>
         <NavBar />
         <Switch>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/signup">
                <UserSignUp />
            </Route>
           <Route exact path="/admin">
                <Admin />
            </Route>
            <Route exact path="/:id">
                <UserPage />
            </Route>
            
            <Redirect to="/" />
           </Switch>
           </BrowserRouter>
        </div>
    );
}

export default App;