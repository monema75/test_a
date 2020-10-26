import React from 'react';

import './style.scss';

function Stepper({ activeStep, activeStepColor, totalSteps }) {
  const getRenderedSteps = () => {
    let content = [];

    for (let count = 0; count < totalSteps; count++) {
      let isActive = count === activeStep;

      content.push(
        <div
          key={count}
          className={`step ${isActive ? "step--active" : ""}`}
          style={{ backgroundColor: isActive ? activeStepColor : '' }}
        ></div>
      );
    }

    return content;
  };

  return (
    <div className="Stepper">
      {getRenderedSteps()}
    </div>
  )
}

export default Stepper;