import React, { useState, useEffect } from 'react';
import { Redirect, Route} from 'react-router-dom';
import './App.css';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';

const baseUrl = "http://localhost:3000/"

function App() {

  const [user, setUser] = useState({})
  const [error, setError] = useState("")

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(token){
      fetch(baseUrl + "profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(result => {
        if(result.id){
          setUser(result)
        }
      })
    }
  }, [])
  
  const signUp = (username, password) => {
    fetch(baseUrl + "users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(response => response.json())
    .then(result => setUser(result))
  }

  const login = (username, password) => {
    fetch(baseUrl + 'login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.token) {
        localStorage.setItem("token", result.token)
        setUser(result.user)
      } else {
        setError(result.error)
      }
    })
  }  

  return (
    <div className="App">
      <h1>Checkers App</h1>
      {user.username ? <Redirect to="/profile" /> : <Redirect to="/login" /> }
        <Route exact path="/profile" render={(renderProps) => <Profile username={user.username} /> }/>
        <Route exact path='/login' render={(renderProps) => <Login login={login} errorMessage={error} /> } />
        <Route exact path='/signup' render={(renderProps) => <SignUp signUp={signUp} />} />
    </div>
  );
}

export default App;