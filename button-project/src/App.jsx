import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, counterFunc] = useState(0);

  function AddValue() {
    
     if(counter === 21){
     counter(0)
     }
      counterFunc(counter++)

  }
  function minuseValue(){
    if(counter === 0){
  counterFunc(0)
    }
    else{
      counter--
      counterFunc(counter)
    }
    
  }
  return (
    <>
      <h1>Counter Program</h1>,
      <h2>Counter Value {counter}</h2>,
      <button onClick={AddValue}>Add Value</button>,
      <button onClick={minuseValue}>Remove Value {counter}</button>
    </>

  )
}

export default App
