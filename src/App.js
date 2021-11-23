import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false);

  function sub() {
    if (count === 0) {
      return setCount(0);
    } else {
      return setCount(count - 1);
    }
  }

  function add() {
    if (count === 5) {
      return setCount(5);
    } else {
      return setCount(count + 1);
    }
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={add}>Click me to add</button>
      <button onClick={sub}>Click me to sub</button>

      <div>
        <p>Click to show message</p>
        <button onClick={() => setMessage(!message)}>Show message</button>
        {message && <p>hello again</p>}
      </div>
    </div>
  );
}

export default Example;
