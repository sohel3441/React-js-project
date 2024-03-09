import React, { useState } from "react";
 import Button from 'react-bootstrap/Button';
 import UserDetails from "./STATE/Userdetails";
// import './App.css'


//import Dashboard from "./STATE/Dashboard";

// function App(){
//     let person1 ={
//         name:"sohel",
//         age:22,
//         address:"nanded",
//     };
//         let person2 ={
//             name:"furqan",
//             age:30,
//             address:"mumbai"
//         };
//             let person3 ={
//                 name:"kamran",
//                 age:32,
//                 address:"delhi"
//     }
//      return (
//         <>
//              { <Label/>
//              <Input/>     }
//              { <RegistrationForm/> */}
//              { <Card/> */}
//              { <Demo name=""/> */}
//              {<InputComp placeholder="Enter your name" type="text"/>
//              <InputComp placeholder="Enter your password" type="text"/>

//              <InputComp placeholder="Enter your Email" type="text"/>

//              <InputComp placeholder="Enter your Contact number" type="text"/> */}


// {<CardComp userdata={person1}/>
// <CardComp userdata={person2}/>
// <CardComp userdata={person3}/> */}
//  { <NewButton/> */}
//  { <Alerts/> */}
//  { <MultipleCards/> */}
//  {<Heading/>

// <LabelInput/>
// <Gender/>
// <Button/> }

      
//         </>
//     )

// }

 // export default App;



//  function App() {
//   const uData = [
//       {id:1, name: "sohel", age: 22, address: "nanded" },
//       {id:2,  name: "furqan", age: 30, address: "mumbai" },
//       {id:3,  name: "kamran", age: 33, address: "pune" },
//   ];

//   return (
//       <div>
//           {uData.map((item, index) => (
//               <ArrayOfObject key={index} data={item} />
//           ))}
//       </div>
//   );
// }

// function App(){
//     let name="sohellll"
//  return(
//     <div className="">
//   <h1> App Component </h1>

//   <CompA  myname={name}/>

//     </div>
    
//  )
// }



/////////            STATE    /////////




// function App(){
 
//    const [state , setState] = useState(0);  

//    console.log("initial value",state);

//    const chaneName=()=>{
//       setState(state + 1);
//    }

//    const Removevalue=()=>{
//       setState(state - 1);
//    }   

      
   
//    console.log("updated value",state);
//    return(

//       <div>
//          <button className="btn btn-success" onClick={chaneName}>Add value  {state}</button>
//          <button className="btn btn-danger" onClick={Removevalue}>remove value  {state}</button>
//       </div>

//    )
// }




// function App(){
//    let person ={
//       name:"sohell",
//       age:22,
//       address:"nanded"
//       }

//        const [state , setState] = useState(person)
//          const [data ,setData] = useState(person);

//          const {name , age , address}  = data

//          console.log(data);

//          const addData=()=>{
//             setData({...data , education : "MCA" });
//             console.log(data);
//          }


//       return(
//       <div>

//          <p>Name : {name}</p>
//          <p>Age : {age}</p>
//          <p>Add : {address}</p>
//          <button className="btn btn-danger" onClick={addData}> Click here  </button>

//          <WorkingState />

//       </div>
//       )

// }

// function App(){

// }


// Component One




 
// const App = () => {
//   //  const [showComponentOne, setShowComponentOne] = useState(false);
//   //  const [showComponentTwo, setShowComponentTwo] = useState(false);
 
//   //  const handleClick = () => {
//   //     setShowComponentOne(true);

//   //    setShowComponentTwo(true);
//   return (
//     <>
//      {/* <ComponentOne />  */}
//      {/* <Workingstate2/> */}

//     </>
//     //  <div>
//     //    <h1></h1>
//     //   
//     //    {showComponentOne ? <ComponentOne /> : <ComponentTwo handleClick={handleClick} />}
//     //    {showComponentTwo ? <ComponentTwo /> : <ComponentThree handleClick={handleClick} />}

//     //  </div>
//    );


//    };

   function App(){
    return(
      <>
      {/* <Dashboard/> */}
      {
    userData.map((key , index)=>{
console.log(key, index);
    })
  }   
      <UserDetails/>
      </>
    )
   }
 
 
 export default App;
