import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import "../home/home2.css";

const fadeIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.8);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.zIndex || 1000};
`;

const Modal = styled.div`
  background-color: #fff;
  border-radius: 13px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  animation: ${props => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease-in-out;
  text-align: center;
`;

const Button = styled.button`
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  display: inline-block;
`;

const NotificationModal = ({ isOpen, text, zIndex, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timeoutId = setTimeout(() => {
        onClose();
      }, 300); // Wait for 0.3s, which is the duration of the animation
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isClosing, onClose]);

  const handleClick = () => {
    setIsClosing(true);
  };

  return (
    <Container isOpen={isOpen} zIndex={zIndex}>
      <Modal isOpen={isOpen && !isClosing}>
      <p className='supercellmagic_font lb_txt_size_12'>{text}</p>
        <Button onClick={handleClick}>OK</Button>
      </Modal>
    </Container>
  );
};

export default NotificationModal;
