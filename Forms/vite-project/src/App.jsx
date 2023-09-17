import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserNameForm from './UserNameForm'
import SignUpForm from './SignUpForm'
import ShoppingList from './ShoppingListForm'
import ShoppingLists from './ShoppingList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ShoppingLists/>

    </div>
  )
}

export default App
