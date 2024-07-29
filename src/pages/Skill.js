import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skill = React.forwardRef((props, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const ProgressBar = ({ progress }) => {
    return (
      <div className="progress border border-dark rounded-0">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-dark"
          style={{ width: `${progress}%`, margin: '0.15rem' }}></div>
      </div>
    );
  };

  return (
    <div className="skill-container" ref={ref}>
      <div className="container" ref={inViewRef}>
        <div className={`animate-item-left ${inView ? 'in-view' : ''}`}>
          <div className="title">
            <h1 className="cormorant-unicase fw-bold text-end">MY SKILL</h1>
          </div>
          <div className="row py-5 my-5">
            <div className="col-lg-6">
              <div className="mb-4">
                <p className="fw-semibold">HTML / CSS / TypeScript</p>
                <ProgressBar progress={90} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">React.Js</p>
                <ProgressBar progress={90} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">Node.Js / Express.Js</p>
                <ProgressBar progress={80} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">Bootstrap / Ant Design / MUI</p>
                <ProgressBar progress={80} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">Sass / SCSS</p>
                <ProgressBar progress={70} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-4">
                <p className="fw-semibold">Ajax / axios</p>
                <ProgressBar progress={80} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">Restful API</p>
                <ProgressBar progress={70} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">PHP</p>
                <ProgressBar progress={50} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">MySQL</p>
                <ProgressBar progress={70} />
              </div>
              <div className="mb-4">
                <p className="fw-semibold">Git / GitHub</p>
                <ProgressBar progress={80} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skill;
