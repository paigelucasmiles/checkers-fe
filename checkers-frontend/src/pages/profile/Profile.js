import React from 'react'
import Game from '../../components/Game'

export default function Profile({ username }) {

    return (
        <div>
            <h1>Welcome! {username}</h1>
            <Game />
        </div>
    )
}