import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountdownTimer = ({ targetDate }) => {
  const [currentTime, setCurrentTime] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('https://greedyverse.co/api/getCurrentTime.php')
        .then(response => {
          setCurrentTime(response.data.time);
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentTime) {
      const timeDiff = Date.parse(targetDate) - Date.parse(currentTime);
      setTimeRemaining(timeDiff);
    }
  }, [currentTime, targetDate]);

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <div>
      {timeRemaining ? (
        <div>
          <div>{days} : {hours} : {minutes} : {seconds}</div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CountdownTimer;
