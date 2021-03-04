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

    const [jumpableOpponent, setjumpableOpponent] = useState("")

    const [locationAfterJump, setlocationAfterJump] = useState("")

    // game logic


    const updateCurrentPlayerAction = (lastAction) => {
        setCurrentPlayerAction(playerActions[lastAction])
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
        if(pawnColor === 'white') {
            showLegalMovesForPlayer("white", currentPawnSelected)
        }
        if(pawnColor === 'black') {
            showLegalMovesForPlayer("black", currentPawnSelected)
        }
    }


    const adjustLegalMovesForJumpableOpponents = (opponentToJump, selectedPawnColumn, selectedPawnRow, directionOfPlay, allLegalOptions) => {
        opponentToJump.forEach((opponent) => {
            const opponentColumn = opponent.split("")[0].charCodeAt(0)
            const offsetFromSelectedPawn = opponentColumn - selectedPawnColumn

            const jumpToColumn = selectedPawnColumn + (offsetFromSelectedPawn * 2)
            const jumpToRow = parseInt(selectedPawnRow) + 2 * directionOfPlay
            const jumpToCoordinates = String.fromCharCode(jumpToColumn).concat(jumpToRow)

            allLegalOptions = allLegalOptions.filter(legalOption => legalOption !== opponent)

            allLegalOptions.push(jumpToCoordinates)

            setlocationAfterJump(jumpToCoordinates)
        })
        return allLegalOptions;
    }

    
    const showLegalMovesForPlayer = (player, currentPawnSelected) => {
        const selectedPawnColumn = currentPawnSelected.split("")[0].charCodeAt(0)
        const selectedPawnRow = parseInt(currentPawnSelected.split("")[1])
        const columnOption1 = String.fromCharCode(selectedPawnColumn - 1)
        const columnOption2 = String.fromCharCode(selectedPawnColumn + 1)
        
        const playerPawnPositions = player === 'white' ? whitePawnPositions : blackPawnPositions;
        const opponentPawnPositions = player === 'white' ? blackPawnPositions : whitePawnPositions;
        const directionOfPlay = player === 'white' ? 1 : -1;

        const rowOption = selectedPawnRow + 1 * directionOfPlay
        const legalOption1 = columnOption1.concat(rowOption)
        const legalOption2 = columnOption2.concat(rowOption)
        let allLegalOptions = [legalOption1, legalOption2]
        const opponentToJump = allLegalOptions.filter(option => opponentPawnPositions.includes(option))

        if(opponentToJump){
            allLegalOptions = adjustLegalMovesForJumpableOpponents(opponentToJump, selectedPawnColumn, selectedPawnRow, directionOfPlay, allLegalOptions)
        }

        allLegalOptions = allLegalOptions.filter(legalOption => opponentPawnPositions.includes(legalOption) === false && playerPawnPositions.includes(legalOption) === false)

        setjumpableOpponent(opponentToJump)
        setLegalMoves(allLegalOptions)
        setCurrentPlayerAction(playerActions[currentPlayerAction])
    }


    const movePawn  = (clickedSquareCoordinates) => {
        if(legalMoves.find(legalOption => legalOption === clickedSquareCoordinates)) {
            if(turn === 'white') {
                const newWhitePawnPositions = whitePawnPositions.filter(currentPosition => currentPosition !== selectedPawnLocation)
                newWhitePawnPositions.push(clickedSquareCoordinates)

            if (turn === 'white' && clickedSquareCoordinates === locationAfterJump) {
                const newBlackPawnPositions = blackPawnPositions.filter(blackPawn => jumpableOpponent.includes(blackPawn) === false)
                console.log("filter black pieces")
                setBlackPawnPositions(newBlackPawnPositions)
            }
                setWhitePawnPositions(newWhitePawnPositions)
                setSelectedPawnLocation("")
                setLegalMoves([])
                setTurn('black')
                setCurrentPlayerAction(playerActions[currentPlayerAction])

            } else if(turn === 'black') {
                const newBlackPawnPositions = blackPawnPositions.filter(currentPosition => currentPosition !== selectedPawnLocation)
                newBlackPawnPositions.push(clickedSquareCoordinates)
                
                if(turn === 'black' && clickedSquareCoordinates === locationAfterJump) {
                    const newWhitePawnPositions = whitePawnPositions.filter(whitePawn => jumpableOpponent.includes(whitePawn) === false)
                    console.log("filter White pieces")
                    setWhitePawnPositions(newWhitePawnPositions)
                }
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

