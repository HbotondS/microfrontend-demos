import { useState } from "react";
import React from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>count = {count}</div>
            <button className="rounded-full bg-green-500 text-white p-2" onClick={() => setCount(count + 1)}>Add one </button>
        </>
    );
}