import React from 'react';
import '../styles/loadingSpinner.css';

const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="loading-spinner" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
