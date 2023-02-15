import "./home.css";
import "./home2.css";
import tokenPicture from "../img/GV_w200.png";
import React, { useState, useEffect } from 'react';

const LoadingPage = (props) => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setShowLoading(false);
      props.onPageLoad();
    };
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 5000);
    window.addEventListener('load', handleLoad);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleLoad);
    };
  }, [props.onPageLoad]);

  if (!showLoading) {
    return null;
  }

  return (
    <div className='lb_overlay_panel loading-page'>
      <img
        src={tokenPicture}
        alt='loading icon'
        className='loading-icon'
      />
    </div>
  );
};

export default LoadingPage;
