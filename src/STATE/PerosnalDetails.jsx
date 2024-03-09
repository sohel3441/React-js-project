

import React, { useState } from "react";
import ComponentTwo from "./Education"; // Import ComponentTwo here

const ComponentOne = () => {
  const [comp1, setComp1] = useState(false); // Changed variable name to follow standard conventions

  return (
    // <div style={{ backgroundColor: "greenyellow" }}>
    //   <h2>First Component</h2>
    //   <h2>Name: SOHEL</h2>
    //   <h2>Age: 22</h2>
    //   <h2>City: NANDED</h2>
    //   {comp1 && <ComponentTwo />} 
    //   <button className="btn btn-danger" onClick={() => setComp1(true)}>
    //     Show Education
    //   </button>
    <div style={{ backgroundColor: "greenyellow" }}>
       <div>
        <button className="btn btn-danger"></button>
       </div>
       
    </div>
  );
};

export default ComponentOne;


