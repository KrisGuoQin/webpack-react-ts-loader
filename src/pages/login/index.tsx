import { useState } from "react";

const Login = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Login</h1>
      <span>{count}</span>
      <button type="button" onClick={() => setCount(count + 1)}>
        +!
      </button>
    </div>
  );
};

export default Login;
