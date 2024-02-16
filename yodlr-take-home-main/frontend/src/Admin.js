import react, { useEffect } from 'react'
import { useData } from './hooks'
import "./Admin.css"




const Admin = () => {
    const [users,getUsers,isLoading] = useData('users')

    useEffect(()=>{
        getUsers()
    },[])
    
    
    // returns a list of all users with their first name, last name, email, and admin status
    return (
        <div>
            {isLoading && <div><p>Hello</p></div>}
            {!isLoading && <div>
                <h1 style={{textAlign:'center'}}>Users</h1>
                <ul>
               
                {users.map((user)=>{
                return <li key={user.id} className="user">
                    <p>Name: {user.firstName} {user.lastName}</p>
                    <p>Email: {user.email}</p>
                    <p>Status: {user.state}</p>
                    <p>Type: {user.is_admin ? 'Admin' : 'User'}</p>
                    </li>
                    }
                )}
                </ul>
                </div>}
        </div>
    )
     
}

export default Admin;