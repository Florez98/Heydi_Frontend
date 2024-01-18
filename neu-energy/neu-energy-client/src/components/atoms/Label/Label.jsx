import React from 'react';

const namespace = 'label';

export const Label = ({ text, className }) => {
  return <label className={`${namespace} ${className}`}>{text}</label>;
};

