import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CircularCountDown.css';

const CircularCountdownTimer = ({ duration, updateInterval, diameter, borderThickness, onOrderExpired }) => {
  const [timeRemaining, setTimeRemaining] = useState(duration);

  useEffect(() => {
    if (timeRemaining <= 0) {
      handleOrderExpired();
      return;
    }

    const interval = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - updateInterval / 1000);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [duration, updateInterval, timeRemaining]);

  const handleOrderExpired = () => {
    clearInterval();
    onOrderExpired(true);
  };

  const calculateBorderAngle = () => {
    const percentageRemaining = timeRemaining / duration;
    const angle = 360 - percentageRemaining * 360;
    return angle;
  };

  const borderStyle = {
    strokeDasharray: `${calculateBorderAngle()} ${360 - calculateBorderAngle()}`,
    strokeDashoffset: '90',
    strokeWidth: `${borderThickness}px`,
  };

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = Math.floor(timeRemaining % 60);

  return (
    <svg width={diameter} height={diameter} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#ccc"
        strokeWidth={`${borderThickness}px`}
      />
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="rgb(96, 76, 199)"
        strokeWidth={`${borderThickness}px`}
        style={borderStyle}
      />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontSize="20">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </text>
    </svg>
  );
};

CircularCountdownTimer.propTypes = {
  duration: PropTypes.number.isRequired,
  updateInterval: PropTypes.number.isRequired,
  diameter: PropTypes.number.isRequired,
  borderThickness: PropTypes.number.isRequired,
  onOrderExpired: PropTypes.func.isRequired,
};

export default CircularCountdownTimer;
