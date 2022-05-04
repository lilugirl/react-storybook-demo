import React,{useState} from 'react'
function Button(){
    const[count,setCount]=useState(0)
    const increment=()=>{
        setCount((prev)=>prev+1)
    }
    return (<div>
        <h2>counter:{count}</h2>
        <input type="button" value="increment" onClick={increment} />
    </div>)
}
export default Button