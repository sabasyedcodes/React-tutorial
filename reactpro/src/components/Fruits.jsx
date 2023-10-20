import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Strawberry"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎" },
    { name: "Banana", price: 2, emoji: "🍌" },
    { name: "Mango", price: 7, emoji: "🥭" },
    { name: "Strawberry", price: 15, emoji: "🍓" },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //   {fruit.emoji}{fruit.name} ${fruit.price}
          // </li>

          <Fruit key={fruit.name} emoji={fruit.emoji} name={fruit.name} price={fruit.price}  />

        ))}
      </ul>
    </div>
  );



}
