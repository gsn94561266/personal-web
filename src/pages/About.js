import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = React.forwardRef(({ setShowPopup }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const ProgressBar = ({ progress }) => {
    return (
      <div className="progress border border-dark rounded-0">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, margin: '0.15rem' }}></div>
      </div>
    );
  };

  return (
    <div className="component" ref={ref}>
      <div
        className="container px-4 about-container text-white"
        ref={inViewRef}>
        <div className="row flex-column-reverse flex-lg-row justify-content-between my-5">
          <div
            className={`col-lg-6 animate-item-left ${inView ? 'in-view' : ''}`}>
            <div className="mt-5 mb-3">
              <h1 className="fw-bold">ABOUT ME</h1>
            </div>
            <div className="d-block d-lg-none">
              <img
                className="rounded w-100"
                src={process.env.PUBLIC_URL + '/images/01-1.png'}
                alt="avatar"
              />
            </div>
            <div className="mt-4 mt-lg-0">
              {/* <h4 className="fw-bold">
                <span className="fw-normal">哈囉，我是</span>
                明泓儒
              </h4> */}
              <p className="text-light fw-semibold">
                {/* 我先前在音樂出版公司工作，負責樂譜製作、錄音、編曲和混音。最近完成了資展國際的『前端工程師就業養成班』進修課程，讓我對前端領域深深著迷！透過這個課程，我學會了HTML、CSS和JavaScript等前端技術，並且已經能夠應用React.js與Node.js開發網站功能，像是常見的註冊登入、串接第三方API、管理系統，響應式網頁等。我現在致力於發展前端技能，並期待在這個領域中不斷學習和成長。 */}
                我是一名 React
                前端工程師，擅長根據使用者需求進行客製化開發。我擁有豐富的開發經驗，並精通
                React、TypeScript 和 CSS 框架來創建各種網站。
              </p>
            </div>
            <div className="my-5">
              <h4 className="fw-bold">我的技能</h4>
              <div className="row my-4">
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
              <div>
                <button
                  className="btn btn-outline-light py-2 px-4 border border-2 border-light fw-bold"
                  onClick={() => {
                    setShowPopup(true);
                  }}>
                  查看更多
                </button>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 text-end animate-item-right ${
              inView ? 'in-view' : ''
            }`}>
            <div className="d-none d-lg-block">
              <img
                className="rounded mt-5 w-75"
                src={process.env.PUBLIC_URL + '/images/01-1.png'}
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
