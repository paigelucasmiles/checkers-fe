import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({ login, errorMessage }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login(username, password)
    }

    return (
        <div className="form-container">
            <form id="login-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <label>Username</label>
                <input name="username" value={username} onChange={event => setUsername(event.target.value)} />
                <label>Password</label>
                <input type="password" name="password" value={password} onChange={event => setPassword(event.target.value)} />
                {errorMessage ? <p style={{color: 'red'}} >{errorMessage}</p> : null}
                <input type="submit" value="Login" />
                <Link to="/signup" >Create Account</Link>
            </form>
        </div>
    )
}
