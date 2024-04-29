import { useState } from "react";

export const Test1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Test-1</h1>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +!
      </button>
    </div>
  );
};
