import React, { useState, useEffect } from 'react';
import './BlueCheckMark.css'; 
import "./home.css";
import "./home2.css";// Import CSS file for styling

const BlueCheckMark = () => {
  const [visible, setVisible] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 500); 

//     return () => clearTimeout(timer);
//   }, []);

function displaySection(){
    setShowPanel(true);
    setTimeout(() => {
              setVisible(true);
            }, 500); 

            setTimeout(() => {
                setShowPanel(false);
              }, 2000); 
}

  return (
  <div >
{showPanel && (

<div className="blue-checkmark-container">

<div>
     <div className='blue-checkmark-div'>
     {visible && (
        <svg
          className="blue-checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle className="blue-checkmark-circle" cx="26" cy="26" r="25" />
          <path
            className="blue-checkmark-check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      )}
     </div>
      
    </div>
    <br/>
    <div className='lb_txt_only_color_white'><h3>Payment Successfull</h3></div>
    <div><a href='' className='lb_remove_text_decoration lb_txt_orange'><b>Dashboard</b></a></div>
    </div>

)}


  </div>
   
  );
};

export default BlueCheckMark;
