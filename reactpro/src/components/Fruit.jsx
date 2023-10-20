export default function Fruit({ name, price, emoji, soldout }) {
  return (
    // fragment in nothing but a container that we can use if we don't want any html elements use it when you want to combine them , syntax <> </>
    <>
      {/* {emoji} {name} {price} */}
      {/* {price < 10 ? ( */}
        <li>
          {emoji} {name} {price} {soldout ?"soldOut": ""}
        </li>
      
    </>
  );
}
