import PropTypes from "prop-types";

function CounterApp({ value }) {
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
    </>
  );
}

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number,
};
