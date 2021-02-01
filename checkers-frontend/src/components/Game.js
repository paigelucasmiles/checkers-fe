import React, { useState } from 'react';
import './Game.css'
import Board from './Board';

export default function Game() {

    // game state

    const [whitePawnPositions, setWhitePawnPositions] = useState(["b1", "d1", "f1", "h1", 
    "a2", "c2", "e2", "g2",
    "b3", "d3", "f3", "h3"])

    const [blackPawnPositions, setBlackPawnPositions] = useState(["a6", "c6", "e6", "g6",
    "b7", "d7", "f7", "h7",
    "a8", "c8", "e8", "g8"])


    const [turn, setTurn] = useState("white")

    const [currentPlayerAction, setCurrentPlayerAction] = useState('click pawn')

    const playerActions = {
        "click square": "click pawn",
        "click pawn": "click square",
    }

    const [selectedPawnLocation, setSelectedPawnLocation] = useState("")

    const [legalMoves, setLegalMoves] = useState([])

    // game logic

    const updateCurrentPlayerAction = (lastAction) => {
        const nextPlayerAction = playerActions[lastAction]
        setCurrentPlayerAction(nextPlayerAction)
    }

    const updateSelectedPawnLocation = (currentPawnSelected, pawnColor) => {
        if (currentPawnSelected === selectedPawnLocation) {
            setSelectedPawnLocation('')
            setLegalMoves([])
        } else {
            setSelectedPawnLocation(currentPawnSelected)
            showLegalMoves(currentPawnSelected, pawnColor)
        }
    }

    const showLegalMoves = (currentPawnSelected, pawnColor) => {
        const selectedPawnColumn = currentPawnSelected.split("")[0].charCodeAt(0)
        const selectedPawnRow = parseInt(currentPawnSelected.split("")[1])

        const columnOption1 = String.fromCharCode(selectedPawnColumn - 1)
        const columnOption2 = String.fromCharCode(selectedPawnColumn + 1)

        if(pawnColor === 'white') {
            console.log("i am a white pawn")
            const rowOption = selectedPawnRow + 1
            const legalOption1 = columnOption1.concat(rowOption)
            const legalOption2 = columnOption2.concat(rowOption)
            let allLegalOptions = [legalOption1, legalOption2]
            const opponentToJump = allLegalOptions.filter(option => blackPawnPositions.includes(option))

            opponentToJump.forEach((opponent) => {
                const opponentColumn = opponent.split("")[0].charCodeAt(0)
                const offsetFromSelectedPawn = opponentColumn - selectedPawnColumn

                const jumpToColumn = selectedPawnColumn + (offsetFromSelectedPawn * 2)
                const jumpToRow = parseInt(selectedPawnRow) + 2
                const jumpToCoordinates = String.fromCharCode(jumpToColumn).concat(jumpToRow)

                allLegalOptions = allLegalOptions.filter(legalOption => legalOption !== opponent)

                allLegalOptions.push(jumpToCoordinates)
            })

            allLegalOptions = allLegalOptions.filter(legalOption => blackPawnPositions.includes(legalOption) === false && whitePawnPositions.includes(legalOption) === false)

            setLegalMoves(allLegalOptions)
            setCurrentPlayerAction(playerActions[currentPlayerAction])
        }

        if(pawnColor === 'black') {
            console.log("i am a black pawn")
            const rowOption = selectedPawnRow - 1
            const legalOption1 = columnOption1.concat(rowOption)
            const legalOption2 = columnOption2.concat(rowOption)
            let allLegalOptions = [legalOption1, legalOption2]
            const opponentToJump = allLegalOptions.filter(option => whitePawnPositions.includes(option))

            opponentToJump.forEach((opponent) => {
                const opponentColumn = opponent.split("")[0].charCodeAt(0)
                const offsetFromSelectedPawn = opponentColumn - selectedPawnColumn

                const jumpToColumn = selectedPawnColumn + (offsetFromSelectedPawn * 2)
                const jumpToRow = parseInt(selectedPawnRow) - 2
                const jumpToCoordinates = String.fromCharCode(jumpToColumn).concat(jumpToRow)

                allLegalOptions = allLegalOptions.filter(legalOption => legalOption !== opponent)

                allLegalOptions.push(jumpToCoordinates)
            })

            allLegalOptions = allLegalOptions.filter(legalOption => whitePawnPositions.includes(legalOption) === false && blackPawnPositions.includes(legalOption) === false)

            setLegalMoves(allLegalOptions)
            setCurrentPlayerAction(playerActions[currentPlayerAction])
        }
    }

    const movePawn  = (clickedSquareCoordinates) => {
        if(legalMoves.find(legalOption => legalOption === clickedSquareCoordinates)) {
            if(turn === 'white') {
                const newWhitePawnPositions = whitePawnPositions.filter(currentPosition => currentPosition !== selectedPawnLocation)
                newWhitePawnPositions.push(clickedSquareCoordinates)
                setWhitePawnPositions(newWhitePawnPositions)
                setSelectedPawnLocation("")
                setLegalMoves([])
                setTurn('black')
                setCurrentPlayerAction(playerActions[currentPlayerAction])
            } else if(turn === 'black') {
                const newBlackPawnPositions = blackPawnPositions.filter(currentPosition => currentPosition !== selectedPawnLocation)
                newBlackPawnPositions.push(clickedSquareCoordinates)
                setBlackPawnPositions(newBlackPawnPositions)
                setSelectedPawnLocation("")
                setLegalMoves([])
                setTurn('white')
                setCurrentPlayerAction(playerActions[currentPlayerAction])
            }
        }
    }



    return (
        <div>
            <Board whitePawnPositions={whitePawnPositions}
            blackPawnPositions={blackPawnPositions}
            turn={turn}
            currentPlayerAction={currentPlayerAction}
            legalMoves={legalMoves}
            updateCurrentPlayerAction={updateCurrentPlayerAction}
            selectedPawnLocation={selectedPawnLocation}
            updateSelectedPawnLocation={updateSelectedPawnLocation}
            movePawn={movePawn}
            />
        </div>
    )
}

