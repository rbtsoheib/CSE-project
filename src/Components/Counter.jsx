import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  function candy() {
    setCounter(Counter + 1);
  }

  return (
    <>
      <button onClick={candy}>Push for the ring of Sauroman</button>
      <p>
        the more you push the more it shows that you want it do not worry it
        will consume you anyway
      </p>
      <h1>{Counter}</h1>
    </>
  );
}

export default Counter;
