import React, {useEffect, useState} from 'react'

export default function Hello() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Dom is updated')
  });

  return <div>
    <h1>Hello React</h1>
    <button onClick={() => setCount(n => n + 1)}>Click ({count})</button>
  </div>
};
