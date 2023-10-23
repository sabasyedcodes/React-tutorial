
import Counter from "./components/Counter";
import Message from "./components/message";
function App() {
  const person = {
    name:"Rob",
    message:"Hi there!",
    emoji:"👋🏻",
    seatNumbers:[1,4,7],
  };
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
