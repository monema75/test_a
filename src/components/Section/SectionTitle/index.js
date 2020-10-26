import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

import './style.scss';

const animationEnter = {
  translateY: ['-20%', '0'],
  rotateX: ['-20deg', '0deg'],
  rotateY: ['-20deg', '0deg'],
  opacity: [0, 1],
  delay: (el, index) => index * 200,
  easing: 'easeOutQuart',
  duration: 900,
};

const animationExit = {
  translateX: ['0', '50%'],
  opacity: 0,
  easing: 'easeInQuint',
  delay: (el, index) => index * 120,
  duration: 300,
}

function SectionTitle({ title, state }) {
  const sectionTitlePosition = 85;
  let titleRef = useRef(React.createRef());
  let sectionAnimation = useRef();

  useEffect(() => {
    let fill = titleRef.current.querySelectorAll('.sectionTitle__fill .sectionTitle__line');
    let outline = titleRef.current.querySelectorAll('.sectionTitle__outline .sectionTitle__line');

    if (sectionAnimation.current) {
      sectionAnimation.current.pause();
    }

    let timeline = anime.timeline();

    if (state === 'entered') {
      const timelineDelay = 400;

      timeline
        .add({
          targets: fill,
          ...animationEnter,
          translateX: ['50%', '0'],
        }, timelineDelay)
        .add({
          targets: outline,
          ...animationEnter,
          translateX: ['-50%', '0'],
        }, timelineDelay)
    } else if (state === 'exited') {
      timeline
        .add({
          targets: fill,
          ...animationExit,
        }, 0)
        .add({
          targets: outline,
          ...animationExit,
        }, 0)
    }

    sectionAnimation.current = timeline;
  }, [state]);

  const getRenderedItems = () => {
    if (!title) return;

    let lines = title.split('\r\n');
    return lines.map((line, index) => {
      let yPos = 220 + 150 * index;

      return (
        <g key={index}
          className="sectionTitle__line">
          <text
            textAnchor="end"
            x="100%"
            y={yPos}>{line}</text>
        </g>
      );
    })
  }

  return (
    <div className="sectionTitle" ref={titleRef}>
      <svg width="100%" height="100%" style={{ left: `-${sectionTitlePosition}%` }}>
        <defs>
          <clipPath id="fill">
            <rect x="0" y="0" width={`${sectionTitlePosition}%`} height="100%" />
          </clipPath>
          <clipPath id="outline">
            <rect x={`${sectionTitlePosition}%`} y="0" width={`${100 - sectionTitlePosition}%`} height="100%" />
          </clipPath>
        </defs>

        <g className="sectionTitle__container" x="0" width="50%">
          <g className="sectionTitle__outline" clipPath="url(#outline)">
            {getRenderedItems()}
          </g>

          <g className="sectionTitle__fill" clipPath="url(#fill)">
            {getRenderedItems()}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default SectionTitle;