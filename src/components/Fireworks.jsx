import React from 'react';
import Fireworks from '@fireworks-js/react';

const MyFireworks = () => {
  return (
    <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100,
        },
        gravity: 0,
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: -1,
      }}
    />
  );
};

export default MyFireworks;
