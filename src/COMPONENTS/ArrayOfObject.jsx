import React from 'react'

function ArrayOfObject({ data }) {
  return (
      <div>
        <p className='bg-success'> ID : {data.id}</p>
          <p >Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>Address: {data.address}</p>
      </div>
  );
}

export default ArrayOfObject;
