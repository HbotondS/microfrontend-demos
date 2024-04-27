import { useState } from "react";
import { increase } from "@sing-spa-test/store-events";

export default function Root() {
  const [count, setCount] = useState(0);

  const updateCounter = () => {
    increase();
    setCount(count + 1);
  }

  return (
    <>
      <div>count = {count}</div>
      <button onClick={ updateCounter }>Add one</button>
    </>
  );
}
