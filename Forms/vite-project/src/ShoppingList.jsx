import { useState } from "react";
import ShoppingList from "./ShoppingListForm";
export default function ShoppingLists(){
    const [items, setItems]= useState([
        {id:1,product:"Bnanaa",quantity: 8},
        {id:2,product:"Eggs",quantity: 12}

    ])

    const addItem = (item)=>{
        setItems(currItems =>{
            return [...currItems,{...item, id:9}]
        })

    }
    return(
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map((i)=>(
                    <li key={i.id}>
                        {i.product}-{i.quantity}
                    </li>
                ))}
            </ul>
            <ShoppingList addItem={addItem}/>

        </div>
    )
}