export default function ShoppingLists({items}){
    return (
        <ul>
            {items.map(item=>
            <li style={{color: item.completed ?"green":"red"}}>
                {item.item} - {item.quantity}
                </li>
                )}
        </ul>
    )
}