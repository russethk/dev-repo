import React, { useState, useEffect } from 'react';
import Routes from './routes-nav/Routes';
import NavBar from './routes-nav/NavBar';
import JoblyApi from './api/api';
import LoadingSpinner from './common/LoadingSpinner';
import { BrowserRouter } from 'react-router-dom';
import UserContext from './auth/UserContext';
import { jwtDecode } from "jwt-decode";
import useLocalStorage from './hooks/useLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';


// Key name for storing token in localStorage for re-login
export const TOKEN_STORAGE_ID = 'jobly-token';

/** Jobly application. 
 * 
 * - infoLoaded: has user data been pulled from API?
 * 
 * - currentUser: user obj from API.
 * 
 * - token: for logged in users, this is their authentication JWT.
 *  This is required for most API calls.
 * 
 * - applicationIds: set of IDs of jobs user has applied to.
 * 
 * App -> Routes
*/

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));  // for tracking which jobs user has applied to
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);  // token is stored in localStorage for re-login

  console.debug(
    "App",
    "infoLoaded=", infoLoaded,
    "currentUser=", currentUser,
    "token=", token,
  );

  // Load user info from API. Until a user is logged in and they have a token,
  // this should not run; the only thing that should happen is a login or
  // registration form will display.

  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwtDecode(token);
          // put the token on the Api class so it can use it to call the API.
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    // set infoLoaded to false while async getCurrentUser runs; once the
    // data is fetched (or even if an error happens!), this will be set back
    // to false to control the spinner.

    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  /** Handles site-wide logout. */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles site-wide signup. */

  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /** Handles site-wide login. */

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }


  /** Handles editing user profile. */

  async function editProfile(profileData) {
    try {
      let username = currentUser.username;
      let updatedUser = await JoblyApi.editProfile(username, profileData);
      setCurrentUser(updatedUser);
      return { success: true };
    } catch (errors) {
      console.error("edit profile failed", errors);
      return { success: false, errors };
    }
  }
  

  /** Checks if user has applied to this job. */

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  /* Handles applying to a job. */

  async function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
   
  }

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <BrowserRouter> 
       <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>

        <div className="App">
          <NavBar logout={logout} />
          <Routes login={login} signup={signup} editProfile={editProfile} />
        </div>

        </UserContext.Provider>
       </BrowserRouter>
     
  );
}

export default App;
