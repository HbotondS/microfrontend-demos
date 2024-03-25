import { useState } from "react";
import React from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-fit border-2 border-red-500 border-dashed rounded-lg p-2">
      <div>count = {count}</div>
      <button
        className="rounded-full bg-green-500 text-white p-2"
        onClick={() => setCount(count + 1)}
      >
        Add one{" "}
      </button>
    </div>
  );
}
