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
//function Hello({name,message,emoji,seatNumbers}) {
  /*return <h1>Hello from a component !</h1> <h1>wow!</h1>; this will show error so we use it in this way . if we want to use multiple jsx then we write that in this way down below */
  /* destructuring the props 
  const {name,message} = props; */

function Hello({person}){
  return (
    <div>
      {
        // this is passing the props
      }
      {
        //<h1>{props.message} {props.name}</h1>
      }
      {
        /*<h1>{message} {emoji} {name} {seatNumbers} </h1>*/
      }
      {
        /*<h1>
        {props.person.message} {props.person.emoji} {props.person.name} {props.person.seatNumbers}
      </h1>
      */}
      {person.message} {person.emoji} {person.name} {person.seatNumber}

    </div>
  );
}




export default Hello;
