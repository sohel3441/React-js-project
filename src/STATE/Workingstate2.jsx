// import React, { useState } from 'react'

// const Workingstate2 = () => {
//   const data = ['car', 'bike', 'train ', 'plane', 'cycle']
//   const [State, setState] = useState(data);
//   // data.push('helicopter')
//   const Additem = () => {
//     setState([...State, "truck"])
//   }
//   const Removeitem = (index) => {
//     console.log(index);
//   }

//   const newData = [...State]
//   newData.splice(index, 1)
//   console.log(newData)
//   setState(newData);


//   return (
//     <div>
//       <ul>
//         {
//           State.map((item, index) => {
//             console.log(item);
//             console.log(index);
//             return (
//               <>
//                 <li key={index}>{item}</li>
//                 <button onClick={Additem}>Add new element</button>
//                 <button onClick={() => Removeitem(index)}>Remove</button>
//               </>

//             )
//           })
//         }

//       </ul>
//     </div>
//   )
// }

// export default Workingstate2
