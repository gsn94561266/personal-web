import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FiFacebook,
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

import '../styles/pages.scss';

const fullTexts = ['創新網站解決方案', '客製化網站開發'];

const Home = React.forwardRef((props, ref) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setText((prevText) => prevText.slice(0, -1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % fullTexts.length);
        }
      }, 200);
    } else {
      const currentText = fullTexts[currentIndex];
      const nextCharIndex = text.length + 1;

      if (nextCharIndex <= currentText.length) {
        timer = setTimeout(() => {
          setText(currentText.slice(0, nextCharIndex));

          if (nextCharIndex === currentText.length) {
            setIsDeleting(true);
          }
        }, 300);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, text, isDeleting]);

  useEffect(() => {
    if (inView) {
      const elements = document.querySelectorAll('.animate-item');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('in-view');
        }, index * 200);
      });
    }
  }, [inView]);

  return (
    <div className="component home-background" ref={ref}>
      <div className="container text-center home-container" ref={inViewRef}>
        <div className="p-5">
          <img
            className="w-100 home-avatar animate-item"
            src={process.env.PUBLIC_URL + '/images/main.jpg'}
            alt="avatar"
          />
        </div>
        <div>
          <h5 className="text-secondary fw-semibold animate-item">
            Hello, I'm Tony Ming
          </h5>
          <h1 className="my-3 animate-item">
            <span className="fw-bold">{text}</span>
            <span>|</span>
          </h1>
          <p className="text-secondary text-break mx-2 animate-item">
            我是一位前端工程師， 專長包括網站開發、使用者界面設計和前端技術。
          </p>
          <div className="mt-4 animate-item">
            <ul className="list-unstyled d-flex justify-content-center home-list">
              <li className="px-3">
                <a
                  href="https://www.facebook.com/ahung8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary fs-4">
                  <FiFacebook role="button" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://www.youtube.com/channel/UCQFMkzi8h8WDF2r2MHTM1jg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary fs-4">
                  <FiYoutube role="button" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://www.instagram.com/tonym0606/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary fs-4">
                  <FiInstagram role="button" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://github.com/gsn94561266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary fs-4">
                  <FiGithub role="button" />
                </a>
              </li>
              <li className="px-3">
                <a
                  href="https://www.linkedin.com/in/%E6%B3%93%E5%84%92-%E6%98%8E-75b8aa1b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-secondary fs-4">
                  <FiLinkedin role="button" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4 animate-item">
            <a
              href={process.env.PUBLIC_URL + '/files/明泓儒.pdf'}
              className="btn btn-outline-dark rounded-pill py-2 px-4 border border-2 border-dark fw-semibold"
              download>
              下載履歷
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
