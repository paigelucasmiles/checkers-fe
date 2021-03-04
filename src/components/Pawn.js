import React, { useState } from 'react'

export default function Pawn({ pawnColor,
    turn,
    currentPlayerAction,
    coordinates, 
    updateCurrentPlayerAction, 
    selectedPawnLocation, 
    updateSelectedPawnLocation }) {

    const [pawnClicked, setPawnClicked] = useState(false)

    const handleClick = (event) => {
        if (turn === pawnColor && currentPlayerAction === 'click pawn' && !selectedPawnLocation) {
            event.stopPropagation()
            setPawnClicked(!pawnClicked)
            updateCurrentPlayerAction(currentPlayerAction)
            updateSelectedPawnLocation(coordinates, pawnColor)
        } else if (turn === pawnColor && currentPlayerAction === 'click square' && selectedPawnLocation === coordinates ) {
            event.stopPropagation()
            setPawnClicked(!pawnClicked)
            updateCurrentPlayerAction(currentPlayerAction)
            updateSelectedPawnLocation(coordinates, pawnColor)
        }
    }

    return (
        <div className={pawnClicked ? "red" : pawnColor} onClick={handleClick} >
            
        </div>
    )
}
