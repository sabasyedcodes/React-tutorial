import Fruit from "./Fruit";

export default function Fruits() {
  //const fruits = ["Apple", "Mango", "Banana", "Strawberry"];
  const fruits = [
    { name: "Apple", price: 10, emoji: "🍎", soldout: false },
    { name: "Banana", price: 2, emoji: "🍌", soldout: true },
    { name: "Mango", price: 7, emoji: "🥭", soldout: false },
    { name: "Strawberry", price: 15, emoji: "🍓", soldout: true },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          // <li key={fruit.name}>
          //   {fruit.emoji}{fruit.name} ${fruit.price}
          // </li>

          <Fruit
            key={fruit.name}
            emoji={fruit.emoji}
            name={fruit.name}
            price={fruit.price}
            soldout={fruit.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
