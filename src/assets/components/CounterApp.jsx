import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp() {
  const [CounterApp, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSub = () => {
    setCounter((prev) => (prev >= 1 ? prev - 1 : 0));
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{CounterApp}</h2>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleSub}>subtract</button>
    </>
  );
}

export default CounterApp;

// CounterApp.propTypes = {
//   value: PropTypes.number,
// };
