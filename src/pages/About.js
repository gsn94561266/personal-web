import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BiSolidRightArrow } from 'react-icons/bi';

const About = React.forwardRef(({ setShowPopup }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="about-container" ref={ref}>
      <div className="container px-4 text-light" ref={inViewRef}>
        <div className="title">
          <h1 className="cormorant-unicase fw-bold">ABOUT ME</h1>
        </div>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <div className="card bg-black w-50">
              <img
                className="card-img"
                src={process.env.PUBLIC_URL + '/images/main.jpg'}
                alt="avatar"
              />
            </div>
          </div>
          <div className="col">
            <div className="card bg-black p-4">
              <ul className="custom-list fs-6">
                <li>
                  <BiSolidRightArrow className="me-1" />
                  明泓儒
                </li>
                <li>
                  <BiSolidRightArrow className="me-1" />
                  1995/6/6
                </li>
                <li>
                  <BiSolidRightArrow className="me-1" />
                  台中市北屯區
                </li>
                <li>
                  <BiSolidRightArrow className="me-1" />
                  2013<span className="text-warning">畢業於</span>
                  台灣藝術大學國樂系
                </li>
                <li className="text-warning">
                  專長
                  <BiSolidRightArrow className="me-1 ms-1" />
                  音樂製作 / 網頁設計
                </li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card bg-black p-4">
              <p className="text-warning">2014 ~ 2019</p>
              <p>新古典音樂藝術中心任職音樂老師</p>
              <ul className="custom-list-detail fs-6">
                <li>鋼琴教學</li>
                <li>二胡教學</li>
              </ul>
              <p className="text-warning">2019 ~ 2022</p>
              <p>麥書文化任職製譜人員</p>
              <ul className="custom-list-detail fs-6">
                <li>電腦製譜</li>
                <li>音樂製作</li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card bg-black p-4">
              <p className="text-warning">2022 ~ 2023</p>
              <p>資策會進修</p>
              <ul className="custom-list-detail fs-6">
                <li>前端就業養成班</li>
                {/* <li className="ms-0"></li> */}
              </ul>
              <p className="text-warning">2023 ~</p>
              <p>鉅恒任職前端工程師</p>
              <ul className="custom-list-detail fs-6">
                <li>系統開發</li>
                <li>套件設計</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
