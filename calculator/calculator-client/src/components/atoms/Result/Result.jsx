import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ text }) => {
  return <span>{text}</span>;
};

Result.defaultProps = {
  text: 0,
};

Result.propTypes = {
  text: PropTypes.number,
};

export default Result;
