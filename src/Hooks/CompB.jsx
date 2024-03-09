import React from 'react'
import CompC from './CompC';
const CompB = (props) => {
  return (
    <div>
    <h3>From com B : {props.name1}</h3>  

    <CompC  name2={props.name1}/>
    </div>
  )
}

export default CompB;
