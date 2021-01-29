import React from 'react';
import Pawn from './Pawn';

export default function Square({color, 
    occupied,
    turn,
    currentPlayerAction, 
    coordinates, 
    updateCurrentPlayerAction, 
    selectedPieceLocation}) {

    const renderPawns = () => {
        if(occupied === 'white') {
            return <Pawn pawnColor="white" turn={turn} 
            currentPlayerAction={currentPlayerAction} 
            updateCurrentPlayerAction={updateCurrentPlayerAction}
            coordinates={coordinates}
            selectedPieceLocation={selectedPieceLocation}
            />
        } else {
            if (occupied === 'black') {
                return <Pawn pawnColor="black" turn={turn} 
                currentPlayerAction={currentPlayerAction} 
                updateCurrentPlayerAction={updateCurrentPlayerAction}
                coordinates={coordinates}
                selectedPieceLocation={selectedPieceLocation}
                />
            }
        }
    }

    return (
        <div className={color} >
            {renderPawns()}
        </div>
    )
}
