import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData } from './hooks';

const UserPage = () => {
    const { id } = useParams();
    const [user, getUser, isLoading] = useData('user', id)

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            {!isLoading && <div>
                <h1>Profile Page</h1>
                <p>First Name: {user.firstName} </p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
            </div>
            }
            {isLoading && <div><h1>Loading...</h1></div>}
        </div>
    )
}

export default UserPage;