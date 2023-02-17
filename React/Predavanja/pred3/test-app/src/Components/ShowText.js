import React from "react";
import PropTypes from "prop-types";

function ShowText({ pozdrav, ime }) {
  // ShowText (props) => const {pozdrav, ime} = props;
  return (
    <p>
      {ime}, {pozdrav} iz funckije
    </p>
  );
}

ShowText.propTypes = {
  pozdrav: PropTypes.string,
};

ShowText.defaultProps = {
  pozdrav: `Dobar den`,
};

export default ShowText;
