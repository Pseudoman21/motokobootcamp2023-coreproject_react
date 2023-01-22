import { motokobootcamp2023_coreproject_backend } from "../../declarations/motokobootcamp2023_coreproject_backend";
import React, { useState } from 'react'
import { createRoot } from "react-dom/client";
import Text from './Components/Text'

const App = () => {
  const [greeting, setGreeting] = useState('');
  const greet = async (e) => {
    e.preventDefault()

    setGreeting(await motokobootcamp2023_coreproject_backend.greet(e.target.value))
  }

  return (
    <div>
      <Text />
      <input onChange={e => {greet(e)}} />
      {greeting}
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<App />)
