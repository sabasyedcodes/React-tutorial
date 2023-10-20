import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import ConditionalComponent from "./components/conditionalComponent";
function App() {
  const person = {
    name:"Rob",
    message:"Hi there!",
    emoji:"👋🏻",
    seatNumbers:[1,4,7],
  };
  return (
    <div className="App">
      {
        /*<Hello person = {person} />
        */
      }
      <Fruits />
      {
        /*<ConditionalComponent />*/
      }

    </div>
  );
}

export default App;
