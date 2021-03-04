import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp({ signUp }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        signUp(username, password)
    }

    return (
        <div>
            <form id="signup-form" onSubmit={handleSubmit} >
                <h2>Sign Up</h2>
                <label>Username</label>
                <input name="username" value={username} onChange={event => setUsername(event.target.value)} />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
                <input type="submit" value="Sign Up" />
                <Link to="/login" >Log In</Link>
            </form>
        </div>
    )
}
