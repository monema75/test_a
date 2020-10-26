import React, { useEffect, useState, useRef } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import anime from 'animejs';

import Background from '../Background';
import Stepper from '../Stepper';
import Section, { sectionStatus } from '../Section';
import GoLink from '../GoLink';

import './style.scss';

function Sections({ items, onSectionSelected = () => { } }) {
  const [sections, setSections] = useState([]);
  const [activeSectionID, setActiveSectionID] = useState(0);
  const sectionsRef = useRef(React.createRef());

  const onItemClick = (itemID) => {
    return () => {
      setActiveSectionID(itemID);
    }
  };

  const getPrevID = (id) => {
    let newID = id - 1;
    return newID > -1 ? newID : sections.length - 1;
  }

  const getNextID = (id) => {
    let newID = id + 1;
    return newID < sections.length ? newID : 0;
  }

  const onStepClick = id => {
    setActiveSectionID(id);
  }

  const getRenderedItems = () => {
    if (!sections.length) return;

    let prevIndex = getPrevID(activeSectionID);
    let nextIndex = getNextID(activeSectionID);

    let visibleSections = [
      {
        ...sections[prevIndex],
        index: prevIndex,
        position: sectionStatus.PREVIOUS
      },
      {
        ...sections[activeSectionID],
        index: activeSectionID,
        position: sectionStatus.CURRENT
      },
      {
        ...sections[nextIndex],
        index: nextIndex,
        position: sectionStatus.NEXT
      },
    ];

    return visibleSections.map(({ title, index, position, pic }) => {
      return (
        <Transition
          key={index}
          timeout={0}
          appear={true}>
          {state => {
            return (
              <Section
                key={index}
                title={title}
                position={position}
                state={state}
                pictureURL={pic}
                onClick={onItemClick(index)}>
              </Section>
            )
          }}
        </Transition>
      );
    })
  }

  useEffect(() => {
    setSections(items);

    let details = sectionsRef.current.querySelectorAll('.sections__details > div');

    anime({
      targets: details,
      translateY: ['50px', '0'],
      opacity: [0, 1],
      easing: 'easeOutElastic(1, .6)',
      delay: anime.stagger(120),
      duration: 1800,
    });

  }, [activeSectionID, items]);

  return (
    <div className="sections" ref={sectionsRef}>

      <Background color={items[activeSectionID].color}></Background>

      <TransitionGroup>
        {getRenderedItems()}
      </TransitionGroup>

      <div className="sections__details" style={{ perspective: 100, transformOrigin: 'left' }}>
        <div className="sections__credit">{items[activeSectionID].credit} for</div>
        <div className="sections__company">{items[activeSectionID].company}</div>
        <div className="sections__date">{items[activeSectionID].date}</div>

        <div className="sections__action">
          <GoLink label="have a look" />
        </div>
      </div>

      <Stepper
        totalSteps={items.length}
        activeStep={activeSectionID}
        activeStepColor={items[activeSectionID].color}
        onStepClick={onStepClick}></Stepper>
    </div>
  )
}

export default Sections;