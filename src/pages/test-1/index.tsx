import { useState } from "react";

const Test1 = () => {
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

export default Test1;
