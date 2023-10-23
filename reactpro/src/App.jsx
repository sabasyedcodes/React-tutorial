
import Counter from "./components/Counter";
import Form from "./components/form";
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
      <Form />
    </div>
  );
}

export default App;
