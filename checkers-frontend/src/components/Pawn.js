import React, { useState } from 'react'

export default function Pawn({ pawnColor, turn, currentPlayerAction, coordinates, updateCurrentPlayerAction }) {

    const [pawnClicked, setPawnClicked] = useState(false)

    const handleClick = (event) => {
        if (currentPlayerAction === 'click piece' && turn === pawnColor) {
            setPawnClicked(!pawnClicked)
            updateCurrentPlayerAction(currentPlayerAction)
        } else if (currentPlayerAction === 'click square' && turn === pawnColor) {
            setPawnClicked(!pawnClicked)
        }
    }

    return (
        <div className={pawnClicked ? "red" : pawnColor} onClick={handleClick} >
            
        </div>
    )
}
