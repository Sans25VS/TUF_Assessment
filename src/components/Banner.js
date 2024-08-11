// src/components/Banner.js
import React, { useState, useEffect } from 'react';

const Banner = ({ description, link, isVisible, timer, onTimeUp }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    if (isVisible && remainingTime > 0) {
      const countdown = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (remainingTime <= 0) {
      onTimeUp();
    }
  }, [isVisible, remainingTime, onTimeUp]);

  if (!isVisible) return null;

  return (
    <div className="banner">
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {link}
      </a>
      <p>Time remaining: {remainingTime} seconds</p>
    </div>
  );
};

export default Banner;
