import React from "react";

const InputComp=({type , placeholder})=>{

return(
    <div>
        <input placeholder={placeholder} type={type} />
    </div>
)

}

export default InputComp;