import { useState } from "react"

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <button title="add-count" onClick={() => {setCount(count+1)}}>Adicionar um</button>
      <p title="counter">{count}</p>
    </div>
  )
}

export default App
