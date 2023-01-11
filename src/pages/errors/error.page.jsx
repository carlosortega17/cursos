import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorPage({ code, description, color }) {
  return (
    <div className="container mt-0 p-0 h-100">
      <div className="row justify-content-center align-items-center m-0 p-0 h-100">
        <div className="col-12 text-center">
          <h1 style={{ color, fontSize: 80 }}>{code}</h1>
          <h4 style={{ fontSize: 24 }}>{description}</h4>
        </div>
      </div>
    </div>
  );
}

ErrorPage.propTypes = {
  code: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string,
};

ErrorPage.defaultProps = {
  color: 'red',
};
