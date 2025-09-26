import { useState } from 'react'

function Dec_to_bin() {
  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)

  const algorithm = (binary) => {
    let x = binary
    let temp = 0
    let result = ""
    while (x > 0) {
      temp = x % 2
      result = temp.toString() + result
      x = Math.floor(x/2)
    }
    return result
  }

  const handleClick = () => {
    const output = algorithm(input)
    setResult(output)
  }

  return (
    <>
      <div className="component">
        <h1>Liczba dziesiętna na binarną</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Liczba dziesietna'></input>
        <h1>{result}</h1>
        <button onClick={handleClick}></button>
      </div>
    </>
  )
}

export default Dec_to_bin