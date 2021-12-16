import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <section>
          <div onClick={() => scrollToTop()}>
            <GOTop>
              <Icon>
                <FaArrowUp />
              </Icon>
            </GOTop>
          </div>
        </section>
      )}
    </>
  );
};

export default GoToTop;

const GOTop = styled.section`
  position: fixed;
  cursor: pointer;
  bottom: 100px;
  right: 0;
  background: #0f1624;
  z-index: 100;
  border: 0.5px dotted gray;
  box-shadow: rgb(4 20 43 / 20%) 0px 5px 20px;
  border-radius: 15px 0px 0px 15px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    background: #0f1624;
  }
`;

const Icon = styled.div`
  color: #fff;
  transition: transform 0.3s ease-in-out;
  animation: animate 1s infinite;

  @keyframes animate {
    0% {
      transform: translateY(5px);
      font-size: 18px;
    }
    50% {
      transform: translateY(0px);
      font-size: 19px;
    }
    100% {
      transform: translateY(-2px);
      font-size: 20px;
    }
  }
`;
