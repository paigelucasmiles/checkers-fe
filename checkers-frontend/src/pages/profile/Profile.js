import React from 'react'
import Game from '../../components/Game'

export default function Profile({ username }) {

    const handleClick = (event) => {
        console.log(event.target)
    }

    return (
        <div>
            {/* <h1>Welcome! {username}</h1> */}
            <Game />
        </div>
    )
}