import React, { useState, useContext } from 'react';
import Alert from '../common/Alert';
import JoblyApi from '../api/api';
import UserContext from '../auth/UserContext';
import useTimedMessage from '../hooks/useTimedMessage';
import JobsAppliedTo from '../jobs/JobsAppliedTo';
import { Card, CardBody, Button } from 'reactstrap';

/** Profile editing form.
 *  Shows form and manages update to state on changes.
 * On submission:
 * - calls saveProfile function prop
 * - redirects to /companies route
 * 
 * Routes -> ProfileForm -> Alert
 */

function ProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        password: ""
    });
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useTimedMessage();
    const [isShown, setIsShown] = useState(false);

    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
        "saveConfirmed=", saveConfirmed,
    );

    const showApps = () => {
        setIsShown(current => !current);
    };

    /** on form submit:
     * - attempt save to backend & report any errors
     * - if successful
     *   - clear previous error messages and password
     *   - show save-confirmed message
     *   - set current user info throughout the site
     */

    async function handleSubmit(evt) {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;
        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } catch (errors) {
            debugger;
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed("Profile updated successfully!");

        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
    }

    /** Handle form data changing */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }

    return (
        <div className="col-md-6 col-lg-4 offset-md-3 offset-lg-4">
            <Card>
                <CardBody>
                    <h3>Profile</h3>
                        <div className="card">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <label>Username</label>
                                <p className="form-control-plaintext">{formData.username}</p>
                                </div>
                                <div className="form-group">
                                    <label>First Name</label>
                                 <input
                                        name="firstName"
                                        className="form-control"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                    />
                                </div>
                             <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        name="lastName"
                                        className="form-control"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                 />
                                </div>
                                <div className="form-group">
                                     <label>Email</label>
                                     <input
                                        name="email"
                                        lassName="form-control"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm password to make changes:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={formData.password}
                                        onChange={handleChange}
                                    />
                                </div>

                             {formErrors.length
                                    ? <Alert type="danger" messages={formErrors} />
                                    : null}

                                {saveConfirmed
                                    ? <Alert type="success" messages={[saveConfirmed]} />
                                    : null}

                                <button
                                    className="btn btn-primary btn-block mt-4"
                                    onClick={handleSubmit}
                                >
                                    Save Changes
                                </button>
                            </form>
                        </div>
                    </div>
                </CardBody>
            </Card>
            {/* Toggles list of jobs to show on page */}
            <div className="Expand text-center">
              <Button onClick={showApps} className="btn-sm m-3" color="info">
                {isShown ? 'Hide Applied Jobs' : 'Show Applied Jobs'}
              </Button>
            </div>
            {isShown && <JobsAppliedTo />}
        </div>
    );
}

export default ProfileForm;


