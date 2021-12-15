import { useEffect, useState } from 'react';

const fadeUp = isVisible => ({
  opacity: isVisible ? '1' : '0',
  top: isVisible ? '0' : '50px',
  transition: isVisible
    ? 'opacity 2s ease, top 1s ease'
    : 'opacity 0s ease, top 0s ease',
});

const fadeLeft = isVisible => ({
  opacity: isVisible ? '1' : '0',
  right: isVisible ? '0' : '50px',
  transition: isVisible
    ? 'opacity 2s ease, right 1s ease'
    : 'opacity 0s ease, right 0s ease',
});

const fadeRight = isVisible => ({
  opacity: isVisible ? '1' : '0',
  left: isVisible ? '0' : '50px',
  transition: isVisible
    ? 'opacity 2s ease, left 1s ease'
    : 'opacity 0s ease, left 0s ease',
});

const fadeDown = isVisible => ({
  opacity: isVisible ? '1' : '0',
  bottom: isVisible ? '0' : '50px',
  transition: isVisible
    ? 'opacity 2s ease, bottom 1s ease'
    : 'opacity 0s ease, bottom 0s ease',
});

const expandDown = isVisible => ({
  transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
  transformOrigin: 'top',
  transition: isVisible ? 'transform 0.8s ease' : 'transform 0s ease',
});

const expandUp = isVisible => ({
  transform: isVisible ? 'scaleY(1)' : 'scaleY(0)',
  transformOrigin: 'bottom',
  transition: isVisible ? 'transform 0.8s ease' : 'transform 0s ease',
});

const expandRight = isVisible => ({
  transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
  transformOrigin: 'right',
  transition: isVisible ? 'transform 0.8s ease' : 'transform 0s ease',
});

const expandLeft = isVisible => ({
  transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
  transformOrigin: 'left',
  transition: isVisible ? 'transform 0.8s ease' : 'transform 0s ease',
});

const slideLeft = isVisible => ({
  right: isVisible ? '0' : '100%',
  transition: isVisible ? 'right 2s ease' : 'right 0s ease',
});

const slideRight = isVisible => ({
  left: isVisible ? '0' : '100%',
  transition: isVisible ? 'left 2s ease' : 'left 0s ease',
});

const slideUp = isVisible => ({
  top: isVisible ? '0' : '100%',
  transition: isVisible ? 'top 2s ease' : 'top 0s ease',
});

const slideDown = isVisible => ({
  bottom: isVisible ? '0' : '100%',
  transition: isVisible ? 'bottom 2s ease' : 'bottom 0s ease',
});

export default function useBlockAnimations(item, see) {
  const [animation, setAnimation] = useState(undefined);
  const [isVisible, setisVisible] = useState(false);

  const { direction, animateType } = item;

  useEffect(() => {
    setisVisible(see);
  }, [see]);

  useEffect(() => {
    if (direction === 'right' && animateType === 'fade') {
      setAnimation(fadeRight(isVisible));
    } else if (direction === 'left' && animateType === 'fade') {
      setAnimation(fadeLeft(isVisible));
    } else if (direction === 'up' && animateType === 'fade') {
      setAnimation(fadeUp(isVisible));
    } else if (direction === 'down' && animateType === 'fade') {
      setAnimation(fadeDown(isVisible));
    } else if (direction === 'down' && animateType === 'expand') {
      setAnimation(expandDown(isVisible));
    } else if (direction === 'up' && animateType === 'expand') {
      setAnimation(expandUp(isVisible));
    } else if (direction === 'right' && animateType === 'expand') {
      setAnimation(expandRight(isVisible));
    } else if (direction === 'left' && animateType === 'expand') {
      setAnimation(expandLeft(isVisible));
    } else if (direction === 'left' && animateType === 'slide') {
      setAnimation(slideLeft(isVisible));
    } else if (direction === 'right' && animateType === 'slide') {
      setAnimation(slideRight(isVisible));
    } else if (direction === 'up' && animateType === 'slide') {
      setAnimation(slideUp(isVisible));
    } else if (direction === 'down' && animateType === 'slide') {
      setAnimation(slideDown(isVisible));
    }
  }, [direction, animateType, isVisible]);

  return animation;
}
