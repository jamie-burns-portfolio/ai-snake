import { useState } from 'react'
import Board from './components/board/Board'
import Header from'./components/title/Header'
import './App.css'

function App() {
  const [score, setScore] = useState(0);
  const updateScore = (newScore: number) => {
    setScore(newScore);
  }
  return (
    <div className='app'>
      <Header score={score} />
      <Board width={800} height={600} updateScore={updateScore} score={score} />
    </div>
  )
}

export default App
