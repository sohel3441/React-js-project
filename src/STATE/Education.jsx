
import React, { useState } from "react";
import ComponentThree from "./Contact";

// Component Two
const ComponentTwo = () => {
  const [comp2, setComp2] = useState(false);

  return (
    <div style={{ backgroundColor: "green" }}>
      <h2>Second Component </h2>
      <h1>BCA COMPLETED</h1>
      <h1> YEAR : 2024</h1>
      {comp2 && <ComponentThree />}
      <button className="btn btn-danger" onClick={() => setComp2(comp2)}>
        {comp2 ? "Hide Contacts" : "Show Contacts"}
      </button>
    </div>
  );
};

export default ComponentThree;