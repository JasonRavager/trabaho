import PropTypes from "prop-types";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinners = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
};

Spinners.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Spinners;
