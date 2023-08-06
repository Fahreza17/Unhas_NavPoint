// Buat file LoadingSpinner.js
import React from 'react';
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';
import './LoadingSpinner.css'



const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <BeatLoader color={'#007bff'} loading={true} size={30} />
    </div>
  );
};

export default LoadingSpinner;
