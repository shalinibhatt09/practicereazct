import React, { useState } from 'react'
import Header from './Header'

function App() {
  const[i,Seti]=useState(0);
  return (
    <>
<Header/>
<h1>vite+react</h1>
<h2>count is:{i}</h2>
<button onClick={()=>{
  Seti(i+1)
}}>click me</button>

    </>

  )
}

export default App