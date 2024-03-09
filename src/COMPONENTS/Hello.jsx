
const Hello = () => {
  const person = {
    name: "sohel",
    age: 20,
    address: "nanded"
  };

  let cars = ["maruti", "bmw", "audi", "ferrari"];
  let [c1, c2, c3, c4] = cars;

  return (
    <>
      <h2>sohel</h2>
      <p>the person name is {person.name} </p>
      <p>the person age is {person.age} </p>
      <h2>the person address is {person.address} </h2>
      <h3>first car is {c1} </h3>
      <h3>second car is {c2} </h3>
      <h3>third car is {c3} </h3>
      <h3>fourth car is {c4} </h3>
    </>
  );
};

export default Hello;
