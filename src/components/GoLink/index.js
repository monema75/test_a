import React from 'react';
import './style.scss';

function GoLink({ label, onClick }) {
  return (
    <div className="GoLink" onClick={onClick}>
      {label}
    </div>);
}

export default GoLink;