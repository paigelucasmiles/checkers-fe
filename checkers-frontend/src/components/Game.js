import React, { useState } from 'react';
import './Game.css'
import Board from './Board';

export default function Game() {
    const [whitePawnPositions, setWhitePawnPositions] = useState(["b1", "d1", "f1", "h1", 
    "a2", "c2", "e2", "g2",
    "b3", "d3", "f3", "h3"])

    const [blackPawnPositions, setBlackPawnPositions] = useState(["a6", "c6", "e6", "g6",
    "b7", "d7", "f7", "h7",
    "a8", "c8", "e8", "g8"])

    const [turn, setTurn] = useState("white")

    const [currentPlayerAction, setCurrentPlayerAction] = useState('click piece')

    const playerActions = {
        "click square": "click piece",
        "click piece": "click square",
    }

    const [selectedPieceLocation, setselectedPieceLocation] = useState("")

    const [legalMoves, setLegalMoves] = useState([])

    const updateCurrentPlayerAction = (lastAction) => {
        const nextPlayerAction = playerActions[lastAction]
        setCurrentPlayerAction(nextPlayerAction)
    }

    return (
        <div>
            <Board whitePawnPositions={whitePawnPositions}
            blackPawnPositions={blackPawnPositions}
            turn={turn}
            currentPlayerAction={currentPlayerAction}
            legalMoves={legalMoves}
            updateCurrentPlayerAction={updateCurrentPlayerAction}
            selectedPieceLocation={selectedPieceLocation}
            />
        </div>
    )
}

