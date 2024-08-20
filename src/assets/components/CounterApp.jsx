import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp({ value }) {
  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleSub = () => {
    setCount((prev) => (prev >= 1 ? prev - 1 : 0));
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleSub}>subtract</button>
    </>
  );
}

export default CounterApp;

// CounterApp.propTypes = {
//   value: PropTypes.number,
// };
