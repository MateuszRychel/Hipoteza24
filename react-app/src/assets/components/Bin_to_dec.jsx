import { useState } from 'react'
import './App.css'

function Bin_to_dec() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="component">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </div>
    </>
  )
}

export default Bin_to_dec