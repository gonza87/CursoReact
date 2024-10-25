import PropTypes from "prop-types";

function HomeApp({ title = "no hay titulo" }) {
  return (
    <>
      <h1>Home</h1>
      <p>test</p>
      <h2>{title}</h2>
      <p>test</p>
    </>
  );
}

export default HomeApp;

HomeApp.propTypes = {
  title: PropTypes.string,
};
