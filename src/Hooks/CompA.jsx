import React from 'react'
import CompB from './CompB';

const CompA = (props) => {
  return (
    <div>
     
       <h3>From Comp A : {props.myname}</h3>

       <CompB  name1={props.myname}/>
    </div> 
  )
}

export default CompA;
