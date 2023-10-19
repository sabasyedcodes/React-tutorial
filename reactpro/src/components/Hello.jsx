{
  /*const name = "Rob";

function displayMessage(){
  return "wow!";
}
*/
}
/* This the structure of component
  props are more like a parameter passing a function
 */
{
  // function Hello(props){...}
}
function Hello({name,message,emoji}) {
  /*return <h1>Hello from a component !</h1> <h1>wow!</h1>; this will show error so we use it in this way . if we want to use multiple jsx then we write that in this way down below */
  /* destructuring the props 
  const {name,message} = props; */
  return (
    <div>
      {
        // this is passing the props
      }
      {
        //<h1>{props.message} {props.name}</h1>
      }
      <h1>{message} {emoji} {name} </h1>
    </div>
  );
}

export default Hello;
