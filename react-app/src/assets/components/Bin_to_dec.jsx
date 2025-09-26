import { useState } from 'react'

function Bin_to_dec() {
  const [input, setInput] = useState(0)
  const [result, setResult] = useState(0)

  const algorithm = (binary) => {
    let number = binary.split('').reverse()
    let result = 0

    for (let i = 0; i < number.length; i++) {
      let temp = parseInt(number[i]) * (2 ** i);
      result += temp
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
        <h1>Liczba binarna na dziesiętną</h1>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Liczba binarna'></input>
        <h1>{result}</h1>
        <button onClick={handleClick}></button>
      </div>
    </>
  )
}

export default Bin_to_dec