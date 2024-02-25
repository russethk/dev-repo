import React from 'react';

/* Renders an alert for a form.
    *
    * Is rendered by ProfileForm to show errors and successes.
    *
    * ProfileForm -> Alert
    */

function Alert({ type = "danger", messages = [] }) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {messages.map(error => (
                <p className="mb-0 small" key={error}>
                    {error}
                </p>
            ))}
        </div>
    );
}

export default Alert;