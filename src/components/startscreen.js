import './startscreen.css'
import { Button } from 'react-bootstrap'
import { BsRocketTakeoffFill } from "react-icons/bs";

function StartScreen ({ onNewGame }) {
    return (
        <div className="start-screen-div">
            <h1 className="start-screen-title">Welcome, Space Ranger!</h1>
            <p className="start-screen-p">Match all the planets to win.</p>
            <Button className="start-game-btn" onClick={() => {
                onNewGame();
            }}>
            Start New Game
            <BsRocketTakeoffFill className="rocket-icon"/>
            </Button>
        </div>
    )
}

export default StartScreen;