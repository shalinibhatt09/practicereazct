import React from 'react'
import Slide from './Slide'
import { Button } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'
import { useState } from 'react'
function App() {
    const v=true
    const[al,setAl]=useState(false)
    const[the,setThe]=useState(v)
    const st={
backgroundColor:the?"white":"pink"
    }
  return (
   <>
   <div style={st}>
    <button onClick={()=>{setThe(!the)}}>change theme</button>
   <h1 style={{textAlign:"center",color:"red"}}>welcome </h1>
   <Slide></Slide>
   <center><Button onClick={()=>setAl(true)}>click me</Button></center>
   {
    al &&(
       <center><Alert variant="primary" dismissible onClose={()=>setAl(false)}>we welcome you</Alert></center> 
    )
   }
   </div>
   </>
  )
}

export default App