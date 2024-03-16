import React, { useState } from 'react'

export default function TestComp() {

    const [sub,setSub]=useState({
        a:0,
        b:0,
        c:0
    })
    const [main,setMain]=useState([sub])


  return (
    <div>
        <button >add</button>
    {main.map((item,index)=>
    
        <>
        <input  type="text" value={item.a} />
        <input  type="text" value={item.b} />
        <input  type="text" value={item.c} />
        </>
    
)}
    </div>

  )
}
