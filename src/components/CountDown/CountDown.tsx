import React, { useEffect } from "react";

import { CountDownP } from "./CountDown.elements";

function CountDown() {
  const [counter, setCounter] = React.useState(5);

  // First Attempts

  useEffect(() => {
    if (counter !== 0) {
      const timer = setInterval(
        () => setCounter((oldValue) => oldValue - 1),
        1000
      );
      return () => clearInterval(timer);
    }
    return function () {
      return null;
    };
  }, [counter]);

  return (
    <div className="App">
      <CountDownP>{counter}</CountDownP>
    </div>
  );
}

export default CountDown;
