import React from 'react'

function Calc() {
    let a=parseFloat(prompt("enter a number"))
    let b=parseFloat(prompt("enter another number"))
    let op=prompt("enter '+' for addition '-'for subtraction '*' for multipliction '/' for division")
    function cal(a,b,op){
if (op=='+'){
    return a+b
}
else if (op=='-'){
    return a-b
}
else if (op=='*'){
    return a*b
}

else if (op=='/'){
    return a/b
}
else{
    return"wrong operation"
}
    }
  return (
    <>
    {cal(a,b,op)}
    </>
  )
}

export default Calc