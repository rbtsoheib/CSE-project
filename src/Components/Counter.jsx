import { useState } from "react";

function Counter() {
  const [Counter, setCounter] = useState(0);

  function candy() {
    setCounter(Counter + 1);
  }

  return (
    <>
      <button  className="bg-green-800" onKeyDown={candy}>Push for the ring of Sauroman</button>
      <p className="">
        the more you push the more it shows that you want it do not worry it
        will consume you anyway
      </p>
      <h1 className="bg-blue-200">{Counter}</h1>
    </>
  );
}

export default Counter;
