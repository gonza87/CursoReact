import PropTypes from "prop-types";

function HomeApp({ title }) {
  return (
    <>
      <h1>Home</h1>
      <h2>{title}</h2>
    </>
  );
}

export default HomeApp;

HomeApp.propTypes = {
  title: PropTypes.string.isRequired,
};
