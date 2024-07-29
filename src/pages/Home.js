import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = React.forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
    <div className="home-container" ref={ref}>
      <div className="container" ref={inViewRef}>
        <div className="slogan fst-italic">
          <div className="mb-4">
            <h1 className="slogan-text">I'm Tony</h1>
          </div>
          <div className="">
            <h1 className="slogan-text slogan-text-right lh-1 mb-0">Nice to</h1>
            <h1 className="slogan-text slogan-text-right lh-1">meet you!</h1>
          </div>
        </div>
        <div className="avatar">
          <img
            className="home-avatar animate-item"
            src={process.env.PUBLIC_URL + '/images/01-2.png'}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
});

export default Home;
