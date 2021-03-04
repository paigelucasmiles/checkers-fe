import React from 'react';
import Pawn from './Pawn';

export default function Square({color, 
    occupied,
    turn,
    currentPlayerAction, 
    coordinates, 
    updateCurrentPlayerAction, 
    selectedPawnLocation, 
    updateSelectedPawnLocation, 
    legalMoves, 
    movePawn }) {

    const renderPawns = () => {
        if(occupied === 'white') {
            return <Pawn pawnColor="white" turn={turn} 
            currentPlayerAction={currentPlayerAction} 
            updateCurrentPlayerAction={updateCurrentPlayerAction}
            coordinates={coordinates}
            selectedPawnLocation={selectedPawnLocation}
            updateSelectedPawnLocation={updateSelectedPawnLocation}
            />
        } else {
            if (occupied === 'black') {
                return <Pawn pawnColor="black" turn={turn} 
                currentPlayerAction={currentPlayerAction} 
                updateCurrentPlayerAction={updateCurrentPlayerAction}
                coordinates={coordinates}
                selectedPawnLocation={selectedPawnLocation}
                updateSelectedPawnLocation={updateSelectedPawnLocation}
                />
            }
        }
    }

    const handleClick = (event) => {
        event.stopPropagation()
        movePawn(coordinates, occupied)
    }

    const highlightLegalMoves = () => {
        if(legalMoves.includes(coordinates)) {
            return("blue")
        } else {
            return(color)
        }
    }

    return (
        <div className={highlightLegalMoves()} onClick={handleClick} >
            {renderPawns()}
        </div>
    )
}
