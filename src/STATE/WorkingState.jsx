import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';


const WorkingState = () => {
    const [state , setState] = useState(false)
    const [color , setColor]= useState(false)
  return (
    <div>

      
      {/* <h1>this is react js </h1>


          {
        state &&   <h1>this is JS</h1>  
           } */}


  {state ? (
           <h1 className={color && "text-color"}>my address is labour colony </h1>

  ): (
    <h1 className={color && "text-color"}>my name is sohel</h1>
  )

  }   
      {/* <button className='btn btn-success' onClick={()=>setState(!state) }>Show Value</button> */}

      <button className='btn btn-success' onClick={()=>setState(!state)}>
      {state ? "name" : "address"}
       </button>
        <br />
       <button className='btn btn-info ' onClick={()=>setColor(!color)}>Text color change</button>
    </div>
  )
}

export default WorkingState;
