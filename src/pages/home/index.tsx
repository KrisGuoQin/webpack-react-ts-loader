import { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Home</h1>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +!
      </button>
    </div>
  );
};
