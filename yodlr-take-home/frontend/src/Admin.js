import React, { useEffect} from 'react';
import { useData } from './hooks';

const Admin = () => {
    const [users, isLoading, getUsers] = useData('users')

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            {!isLoading && users.map(user => {
                return (
                    <div>
                        <h1>{user.firstName} {user.lastName}</h1>
                        <p>{user.email}</p>
                    </div>
                )
            })}
            {isLoading && <div><h1>Loading...</h1></div>}
        </div>
    )
}

export default Admin;