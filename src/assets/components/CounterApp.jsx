import PropTypes from "prop-types";
import { useState } from "react";

function CounterApp() {
  const [CounterApp, SetCounter] = useState(0);

  const handleAdd = () => {
    SetCounter((prev) => prev + 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{CounterApp}</h2>
      <button onClick={handleAdd}>add</button>
    </>
  );
}

export default CounterApp;

// CounterApp.propTypes = {
//   value: PropTypes.number,
// };
