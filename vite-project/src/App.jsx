import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slots from "./Slots.jsx"
import ShoppingLists from "./ShoppingLists.jsx"
import Property from './Property'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Colorbox from './ColorBox'
import ColorBoxgrid from './ColorBoxgrid'
import ScoreKeeper from './ScoreKepper'
import ScoreKeepers from './ScoreKeepers'
import Dice from './Dice'
const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];
const colors=[
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
]

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {item:'eggs',quantity:12,completed:false},
    {item:'milk',quantity:1,completed:true},
    {item:'chciken breasts',quantity:4,completed:false},
    {item:'carrots',quantity:6,completed:true}
  ];

  return (
      <>
        {/* <ColorBoxgrid colors={colors}/>

        <ShoppingLists items={data}/>
        <PropertyList properties={properties} />

        <Slots val1="W" val2="W" val3="W"/>

        <Clicker/> */}
        <Dice dice={[3,6,1]}/>

        
              </>
  )
}

export default App
