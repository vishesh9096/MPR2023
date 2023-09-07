import React from 'react';

function PurpleWave() {
  const waveStyle = {
    position: 'absolute',
    top: '0', 
    left: '0',
    width: '100%',
    height: 'auto',
    zIndex: '-1',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      style={waveStyle}
    >
      <path
        fill="#5b21b6" 
        d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,176C672,213,768,267,864,245.3C960,224,1056,128,1152,106.7C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
}

export default PurpleWave;

