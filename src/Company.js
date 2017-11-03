import React from 'react';
import PropTypes from 'prop-types';

const Company = (props) => {
  return (
    <li className="list-item">
      <div className="logo">
        <img src={props.logoUrl} alt="logo" />
      </div>
      <p>{props.description}</p>
      <span className="arrow">></span>
    </li>
  );
};

export default Company;
