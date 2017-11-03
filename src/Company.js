import React from 'react';
import PropTypes from 'prop-types';

const Company = ({ logoUrl, description }) => {
  return (
    <li className="list-item">
      <div className="logo">
        <img src={logoUrl} alt="logo" />
      </div>
      <p>{description}</p>
      <span className="arrow">></span>
    </li>
  );
};

Company.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Company;
