import PropTypes from "prop-types";

export default function MyFirstComponent({ pageName }) {
  return <h1>Welcome from {pageName}</h1>;
}

MyFirstComponent.propTypes = {
  pageName: PropTypes.string.isRequired,
};
