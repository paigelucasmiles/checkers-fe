import React from 'react';
import Square from './Square';

export default function Board({
    whitePawnPositions, 
    blackPawnPositions, 
    currentPlayerAction, 
    legalMoves, 
    turn,
    updateCurrentPlayerAction,
    selectedPawnLocation, 
    updateSelectedPawnLocation, 
    movePawn }) {
    
    const renderPawns = (squareCoordinates) => {
        if(whitePawnPositions.find(whitePawn => whitePawn === squareCoordinates)) {
            return 'white'
        } else if (blackPawnPositions.find(blackPawn => blackPawn === squareCoordinates)) {
            return 'black'
        }
    }

    const renderSquares = () => {
        let gameSpaces = new Array(8)

        for (let i = 0; i < gameSpaces.length; i++) {
            gameSpaces[i] = new Array(8)
        }

        for (let i = 0; i < gameSpaces.length; i++) {
            const innerArrayLength = gameSpaces[i].length
            for (let j = 0; j < innerArrayLength; j++) {
                const color = (i + j) % 2 === 0 ? "beige" : "green"
                const columns = {
                    0: "a",
                    1: "b",
                    2: "c",
                    3: "d",
                    4: "e",
                    5: "f",
                    6: "g",
                    7: "h",
                }
                const rows = {
                    0: "1",
                    1: "2",
                    2: "3",
                    3: "4",
                    4: "5",
                    5: "6",
                    6: "7",
                    7: "8",
                }

                gameSpaces[i][j] = <Square 
                    key={`${i}${j}`}
                    coordinates={`${columns[j]}${rows[i]}`}
                    color={color}
                    occupied={renderPawns(`${columns[j]}${rows[i]}`)}
                    turn={turn}
                    currentPlayerAction={currentPlayerAction}
                    legalMoves={legalMoves}
                    updateCurrentPlayerAction={updateCurrentPlayerAction}
                    selectedPawnLocation={selectedPawnLocation}
                    updateSelectedPawnLocation={updateSelectedPawnLocation}
                    movePawn={movePawn}
                /> 
            }
        }
        return(gameSpaces)
    }

    return (
        <div className="board-container">
            {renderSquares()}
        </div>
    )
}
