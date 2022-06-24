import { useState } from 'react'

// import './App.css'


function App() {
  const [count, setCount] = useState(0)
  
  return (
   <div>
      <p onClick={setCount(count+1)}>You clicked {count} times</p>
   </div>
  )
}

export default App
