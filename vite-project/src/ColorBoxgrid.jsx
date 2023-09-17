import Colorbox from "./ColorBox";
import './ColorBoxgrid.css'

export default function ColorBoxgrid({colors}){
    const boxes =[];
    for (let i=0; i<25; i++){
        boxes.push(<Colorbox colors={colors}/>)
    }


    return (
    <div className="ColorBoxGrid">
        {boxes}
    </div>
)
}