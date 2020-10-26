import React from 'react';
import './style.scss';

function Background({ color }) {
  return (
    <div className="backgroundColor" style={{ backgroundColor: color }}></div>
  );
}

export default Background;