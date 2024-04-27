import { counter$ } from '@sing-spa-test/store-events';
import './main.css';
import { useEffect, useState } from 'react';

export default function Root() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    counter$.subscribe((value) => {
      console.log("counter value", value);
      setCount(value);
    });
  }, [counter$] );

  return (
    <div className="header">
      <h1>Header</h1>
      <div>count = {count}</div>
    </div>
  )
}
