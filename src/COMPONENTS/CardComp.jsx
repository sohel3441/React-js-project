import React from "react"

const CardComp = (props) => {
 // console.log(props);
    return (
        <div className="col-md-4 bg-success  mycard">
            <h3 className="text-light">Name : {props.userdata.name}</h3>
            <h3 className="text-light">Age : {props.userdata.age} </h3>
            <h3 className="text-light">Address  : {props.userdata.address}</h3>
        </div>
    )
}
export default CardComp;