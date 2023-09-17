import { useState } from "react";

export default function ScoreKeeper(){
const [scores,setScores] = useState({p1Score:0, p2Score:0})
function increaseP1score(){
setScores((oldScores)=>{
    return{...oldScores, p1Score: scores.p1Score+1}
})    
}
function increaseP2score(){
    setScores((oldScores)=>{
        return{...oldScores, p2Score: scores.p2Score+1}
    })    
    }
    return (
        <div>
            <p>Player 1:{scores.p1Score}</p>
            <p>Player 2:{scores.p2Score}</p>
            <button onClick={increaseP1score}>+1 P1</button>
            <button onClick={increaseP2score}>+1 P2</button>
        </div>
    )
}