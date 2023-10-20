import Welcome from "./Welcome";
import Code from "./Code";

export default function ConditionalComponent() {
  // these are element variables
  //let messageOne = <h1>This is message 1</h1>
  //let messageTwo = <h1>This is message 2</h1>;
  // resolving we two return stmts in a condition with single return stmt down below
  let message;
  const display = true; //true;
  // teranary operator
  //return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;
  return display ? <Welcome /> : <Code />;
  /*
  if (display) {
    message = <h1>This is message 1</h1>;
  } else {
    message = <h1>This is message 2</h1>;
  }
  return message;
  */
  /*
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  } 
  */
  /*if (display) {
    return (
      <div>
        <h3>This is a conditional component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code everyday!</h3>
      </div>
    );
  }
  */
}
