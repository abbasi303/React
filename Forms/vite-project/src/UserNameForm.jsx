import { useState } from "react"

export default function UserNameForm(){
    const [username,setUsername]= useState("")
    const updateUsername = (evt)=>{
        setUsername(evt.target.value);
    }
    return (
        <div>
            <input onChange={updateUsername} type="text" placeholder="username" value={username} />
            <button>Submit</button>
        </div>
    )
}