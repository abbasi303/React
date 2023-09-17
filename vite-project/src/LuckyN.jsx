import { useState } from "react";

export default function LuckyN({numDice=2,goal= 7}){
    const[dice, setDice]=useState(getRolls(numDice))
}