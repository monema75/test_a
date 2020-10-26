import React, { useRef, useEffect, useCallback } from 'react';
import { Transition } from 'react-transition-group';
import sectionAnimations from './include/animations';
import anime from 'animejs';

import SectionTitle from './SectionTitle';
import './style.scss';

const sectionStatus = {
  'CURRENT': 'current',
  'NEXT': 'next',
  'PREVIOUS': 'prev',
  'HIDDEN': 'hidden',
}

function Section({
  title,
  position,
  pictureURL,
  onClick = () => { } }) {
  let sectionRef = useRef(React.createRef());
  let previousPosition = useRef(sectionStatus.HIDDEN);
  let animation = useRef();

  const movePosition = useCallback((from, to) => {
    let finalProps = sectionAnimations[from][to];

    if (animation.current) animation.current.pause();

    animation.current = anime({
      targets: sectionRef.current,
      ...finalProps,
    });
  }, []);

  useEffect(() => {
    movePosition(previousPosition.current, position);
    previousPosition.current = position;
  }, [position, movePosition]);

  return (
    <div
      className={`section section--${position}`}
      onClick={onClick}
      ref={sectionRef}>
      <img alt={title} src={pictureURL} />

      <Transition
        in={position === sectionStatus.CURRENT}
        timeout={0}
        appear={true}>
        {state => {
          return <SectionTitle title={title} state={state}></SectionTitle>
        }}
      </Transition>
    </div>
  );
}

export { sectionStatus };
export default Section;