import React, { useState, useEffect } from 'react';
import './header.css';
import CallToAction from './CallToAction';
import Myself from '../../assets/Myself4.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const textOptions = ['Full Stack Web Developer', 'AI ML Enthusiast'];
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeAndClear = () => {
      const currentText = textOptions[textIndex];
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex <= currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            // Start clearing after the pause
            clearText();
          }, 2000); // 2-second pause

          // After typing, set isTyping to false
          setIsTyping(false);
        }
      }, 200); // Typing speed
    };

    const clearText = () => {
      const currentText = displayText;
      let currentIndex = currentText.length;

      const interval = setInterval(() => {
        if (currentIndex >= 0) {
          setDisplayText(currentText.substring(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(interval);

          // After clearing, set isTyping to true and switch to the next text
          setIsTyping(true);
          setTextIndex((textIndex + 1) % textOptions.length);
        }
      }, 50); // Clearing speed
    };

    if (isTyping) {
      typeAndClear(); // Start typing effect
    } else {
      clearText(); // Start clearing effect
    }
  }, [textIndex, isTyping, displayText, textOptions]);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="title_name">Altaf Alam</h1>
        <h3 className="title_skill">{displayText}</h3>
        <CallToAction />
        <HeaderSocials />
        <div className="myself">
          <img src={Myself} alt='myself' />
        </div>
      </div>
      <a href="#contact" className='scroll__down'>
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
