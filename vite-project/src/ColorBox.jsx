import { useState } from "react"
import './ColorBox.css'

function randomChoice(arr){
    const idx =Math.floor(Math.random()*arr.length )
    return arr[idx]
}

export default function Colorbox({colors}){
    const [color,setColor]=useState(randomChoice(colors));
    const changeColor = () =>{
        const randomcolor= randomChoice(colors) 

        setColor(randomcolor)
    }

    return (
    <div onClick={changeColor} className="Colorbox" style={{backgroundColor:color}}>

    </div>
)
}