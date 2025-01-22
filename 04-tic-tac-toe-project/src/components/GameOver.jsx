import { useState, useEffect } from "react"
import Confetti from "canvas-confetti"

export default function GameOver({ winner, onRestart }) {
    const [showConfetti, setShowConfetti] = useState(false);
    
    useEffect(() => {
        if(winner) {
            setShowConfetti(true);

            const timer = setTimeout(() => {
                setShowConfetti(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    },[winner]);

    return <div id="game-over">
        {showConfetti && <Confetti />}
        <h2>Game Over!</h2>
        {winner &&  <p>{winner} won!</p>}
        {!winner && <p>It's a draw!</p>}
        <p onClick={onRestart}>
            <button>Rematch!</button></p>
    </div>
}