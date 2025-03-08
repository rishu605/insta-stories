import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StoryPage from './components/StoryPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StoryPage/>
    </>
  )
}

export default App
