import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
function List() {
    const rel=useRef()
const[user,setUser]=useState('')
const[users,setUsers]=useState([])
const click=()=>{
    setUsers([...users,user])
    rel.current.value=""

}
const rem=()=>{
setUsers(users.slice(0,-1))

}
const styb={
    color:"white",
    backgroundColor:"red",
    border:"4px solid red",
    margin:"2px"
}

  return (
    
    <div style={{backgroundColor:"#E6E6FA"}}>
    <div style={{height:"auto",width:"600px",border:"4px solid black",marginTop:"50px",marginLeft:"300px",backgroundColor:"#B0E0E6"}}>
<input ref={rel} onChange={(e)=>{setUser(e.target.value)}} type="text" placeholder="enter task"></input>
<button style={styb} onClick={click}>add</button>
<button style={styb} onClick={rem}>remove</button>
<div>
    {
users.map((i =>
<h4>{i}</h4>
))
    }

</div>
    </div>
    </div>
    
  )
}

export default List