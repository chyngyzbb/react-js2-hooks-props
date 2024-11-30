import React, { useEffect, useState } from "react";
import Example from "./Example";





function Header({arr,getValue,text,counter}){

    const [value,setValue]=useState('')
    const [modal,setModal]=useState(false)

    const handleChenge=(e)=>{
        setValue(e.target.value)
    }
    const handleClick=()=>{
        if(value==='12345678'){
            alert('successfull')
        }
    }


    return(
        <div>

            <button
                onClick={()=>setModal(!modal)}
            >{modal ? 'close modal' : 'open modal'}</button>

            <div className="open"
                style={{
                    transform: modal ? "scale(1)" : "scale(0)",
                    transition: '0.3s'
                }}
                >
                <input onChange={handleChenge}/>
                <button onClick={handleClick}>push</button> 
            </div>

           









            {/* <ul>
                {
                    arr.map(el=>(
                        <li
                        onClick={()=>getValue(el)} 
                        key={el}>{el}</li>
                    ))
                }
            </ul>
            <h1>{text}</h1>
            <Example getValue={getValue}/> */}





            {/* <h1>{counter}</h1> */}













        </div>
    )
}

export default Header;