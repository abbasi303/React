import './Die.css'
export default function Die(val,color="slateblue"){
    return(
        <div className="Die" style={{backgoundColor:color}} >
            {val}

        </div>
    )
}