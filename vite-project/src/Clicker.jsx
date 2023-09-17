function handleclick(){
    console.log("hello");
}

export default function Clicker (){
    return (
        <div>
            <h1>Click the button</h1>
            <button onClick={handleclick}>Click</button>
        </div>
    )
}