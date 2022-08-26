import React from "react";

import { CountDownP } from "./CountDown.elements";

function CountDown() {
  const [counter, setCounter] = React.useState(5);

  // First Attempts
  const timer = setInterval(() => setCounter(counter - 1), 1000);
  if (counter === 0) {
    clearInterval(timer);
  }

  return (
    <div className="App">
      <CountDownP>{counter}</CountDownP>
    </div>
  );
}

export default CountDown;
