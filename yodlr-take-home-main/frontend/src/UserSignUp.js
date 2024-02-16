import react, { useState } from 'react'
import Api from './take-home-api'
import "./UserSignUp.css"

const UserSignUp = () => {
    const [input,changeInput] = useState()
    const [registered,changeRegistered] = useState(false)
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        changeInput(input => ({
            ...input,
            [name]: value
        }))
        console.log(input)
    }

    const handleClick = (e) => {
        e.preventDefault()
        Api.register(input)
        for(let child of e.target.form){
            if(child.type !== 'submit') child.value = ""
        }
        changeRegistered(true)
    }

    return (
        <div>
        {!registered && <div>
        <div className="SignupForm">
        <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <h1 style={{textAlign:'center'}}>Sign Up</h1>
        <form>
            <div>
                <label htmlFor="firstName">First Name: </label>
                <input type='text' name="firstName" placeholder="" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name: </label>
                <input type='text' name="lastName" placeholder="" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type='text' name="email" placeholder="" onChange={handleChange} />
            </div>
            <div>
                <button color="primary" onClick={handleClick}>Submit</button>
            </div>
        </form>
        </div>
        </div>
        </div>}
        {registered && <div><h1>Thank you for registering!</h1></div>}
        </div>
        
    )
}



export default UserSignUp;