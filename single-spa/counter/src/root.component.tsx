import { useState } from "react";
import { increase } from "@sing-spa-test/store-events";
import './main.css';

export default function Root() {
  const [count, setCount] = useState(0);

  const updateCounter = () => {
    increase();
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <div>count = {count}</div>
      <button onClick={ updateCounter }>Add one</button>
    </div>
  );
}
