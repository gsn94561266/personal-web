import React, { useState, useEffect } from 'react';

import AboutPopup from '../components/AboutPopup';
import '../styles/pages.scss';

const About = React.forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState(false);

  const ProgressBar = ({ progress }) => {
    const [width, setWidth] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setWidth((prevWidth) => {
          if (prevWidth >= progress) {
            clearInterval(interval);
          }
          return prevWidth + 1;
        });
      }, 1);

      return () => {
        clearInterval(interval);
      };
    }, [progress]);

    return (
      <div className="progress border border-dark rounded-0">
        <div
          className="progress-bar"
          style={{ width: `${width}%`, margin: '0.15rem' }}></div>
      </div>
    );
  };

  return (
    <div className="component" ref={ref}>
      <div className="container px-4">
        <div className="row flex-column-reverse flex-lg-row justify-content-between my-5">
          <div className="col-lg-6">
            <div className="my-5">
              <h1 className="fw-bold">關於</h1>
            </div>
            <div className="d-block d-lg-none">
              <img
                className="rounded w-100"
                src={process.env.PUBLIC_URL + '/images/01.png'}
                alt="avatar"
              />
            </div>
            <div className="my-5">
              <h4 className="fw-bold">
                <span className="fw-normal">哈囉，我是</span>
                明泓儒
              </h4>
              <p className="text-secondary fw-semibold">
                我先前在音樂出版社工作，負責樂譜製作、錄音、編曲和混音等工作。最近完成了資展國際的『前端工程師養成班』進修課程，這讓我對前端領域深深的著迷！透過這個課程，我學習了HTML、CSS和JavaScript等前端技術，並開始進一步探索網頁開發和使用者介面設計。我現在致力於發展前端技能，並期待在這個領域中不斷學習和成長。
              </p>
            </div>
            <div className="my-5">
              <h4 className="fw-bold">我的技能</h4>
              <p className="text-secondary fw-semibold">
                我精通多項技術，並擁有開發經驗。我熟悉 JavaScript、React.js 和
                Bootstrap 等前端技術。此外，還具有 Express.js、PHP 和 MySQL
                等後端開發技能。
              </p>
              <div className="row my-4">
                <div className="col-lg-6">
                  <div className="mb-4">
                    <p className="fw-semibold">JavaScript</p>
                    <ProgressBar progress={75} />
                  </div>
                  <div className="mb-4">
                    <p className="fw-semibold">React.Js</p>
                    <ProgressBar progress={85} />
                  </div>
                  <div className="mb-4">
                    <p className="fw-semibold">Bootstrap</p>
                    <ProgressBar progress={80} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <p className="fw-semibold">Express.Js</p>
                    <ProgressBar progress={70} />
                  </div>
                  <div className="mb-4">
                    <p className="fw-semibold">PHP</p>
                    <ProgressBar progress={55} />
                  </div>
                  <div className="mb-4">
                    <p className="fw-semibold">MySQL</p>
                    <ProgressBar progress={65} />
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-outline-dark py-2 px-4 border border-2 border-dark fw-bold"
                  onClick={() => {
                    setShowPopup(true);
                  }}>
                  查看更多
                </button>
              </div>
              {showPopup && <AboutPopup setShowPopup={setShowPopup} />}
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="d-none d-lg-block">
              <img
                className="rounded mt-5 w-75"
                src={process.env.PUBLIC_URL + '/images/01.png'}
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
