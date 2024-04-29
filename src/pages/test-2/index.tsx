import { useState } from "react";

export const Test2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Test-2</h2>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +!
      </button>
    </div>
  );
};
