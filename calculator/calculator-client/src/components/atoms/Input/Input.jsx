import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, readOnly, value }) => {
  return <input type={type} readOnly={readOnly} value={value} />;
};

Input.defaultProps = {
  type: 'text',
  value: '',
  readOnly: false,
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  readOnly: PropTypes.bool,
};

export default Input;
