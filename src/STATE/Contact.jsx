import React, { useState } from "react";

const ComponentThree = () => {
     const [Contact , setContact] = useState(false)
  
  return(
     <div style={{backgroundColor:"blue"}}>
      <h1>Third Component</h1>
      <h3>Contact me in WhatsApp</h3>
      <h3>Contact me in FB</h3>
      <h3>Contact me in INSTA</h3>
     </div>
  )
  };

  export default ComponentThree;