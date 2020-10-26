const INACTIVE_OPACITY = .3;

export default {
  'prev': {
    'current': {
      keyframes: [
        {
          rotateY: '8deg',
          rotateX: '2deg',
          translateY: '66%',
          duration: 200,
          opacity: .3,
          easing: 'easeInCubic',
        },
        {
          translateX: '100%',
          translateY: '0%',
          rotateX: '0deg',
          rotateY: '0deg',
          opacity: 1,
          scale: 1,
          easing: 'easeOutElastic(1, .5)',
          duration: 3000,
        }
      ]
    },
    'next': {
      translateX: ['200%', '200%'],
      translateY: ['0%', '0%'],
      rotateY: ['44deg', '0deg'],
      rotateX: ['4deg', '0deg'],
      opacity: [0, INACTIVE_OPACITY],
      scale: [0.4, 0.5],
      duration: 3000,
      easing: 'easeOutElastic(1, .6)',
      delay: 300,
    },
  },
  'current': {
    'prev': {
      keyframes: [
        {
          rotateX: '8deg',
          rotateY: '2deg',
          easing: 'easeInQuint',
          duration: 200,
        },
        {
          translateX: '-15%',
          translateY: '63%',
          rotateY: '0deg',
          rotateX: '0deg',
          opacity: INACTIVE_OPACITY,
          scale: 0.7,
          easing: 'easeOutElastic(1, .5)',
          duration: 3000,
        }
      ]
    },
    'next': {
      keyframes: [
        {
          rotateX: '8deg',
          rotateY: '2deg',
          easing: 'easeInQuint',
          duration: 200,
        },
        {
          translateX: '200%',
          translateY: '0%',
          rotateY: '0deg',
          rotateX: '0deg',
          opacity: INACTIVE_OPACITY,
          scale: 0.5,
          easing: 'easeOutElastic(1, .5)',
          duration: 3000,
        }
      ]
    },
  },
  'next': {
    'current': {
      keyframes: [
        {
          rotateY: '8deg',
          rotateX: '2deg',
          translateY: '3%',
          duration: 200,
          opacity: .3,
          easing: 'easeInCubic',
        },
        {
          translateX: '100%',
          translateY: '0%',
          rotateX: '0deg',
          rotateY: '0deg',
          opacity: 1,
          scale: 1,
          easing: 'easeOutElastic(1, .5)',
          duration: 3000,
        }
      ]
    },
    'prev': {
      translateX: ['-15%', '-15%'],
      translateY: ['63%', '63%'],
      rotateY: ['-34deg', '0deg'],
      rotateX: ['-4deg', '0deg'],
      opacity: [0, INACTIVE_OPACITY],
      scale: [0.4, 0.7],
      easing: 'easeOutElastic(1, .6)',
      duration: 3400,
      delay: 300,
    }
  },
  'hidden': {
    'prev': {
      translateX: ['-15%', '-15%'],
      translateY: ['63%', '63%'],
      rotateY: ['-34deg', '0deg'],
      rotateX: ['-4deg', '0deg'],
      opacity: [0, INACTIVE_OPACITY],
      scale: [0.4, 0.7],
      easing: 'easeOutElastic(1, .6)',
      duration: 3400,
      delay: 300,
    },
    'current': {
      translateX: ['100%', '100%'],
      translateY: ['0%', '0%'],
      rotateY: ['-54deg', '0deg'],
      opacity: [0, 1],
      scale: [.7, 1],
      easing: 'easeOutElastic(1, .6)',
      duration: 3000,
    },
    'next': {
      translateX: ['200%', '200%'],
      translateY: ['0%', '0%'],
      rotateY: ['44deg', '0deg'],
      rotateX: ['4deg', '0deg'],
      opacity: [0, INACTIVE_OPACITY],
      scale: [0.4, 0.5],
      duration: 3400,
      easing: 'easeOutElastic(1, .6)',
      delay: 300,
    },
  },
}