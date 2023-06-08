import React, { useState } from 'react';
import './Components.scss';

import { RxCrossCircled } from 'react-icons/rx';
import { BsBriefcase, BsBook } from 'react-icons/bs';

const About = React.forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="component" ref={ref}>
      <div className="container px-4 mt-lg-5 mt-0">
        <div className="row flex-column-reverse flex-lg-row justify-content-between my-4">
          <div className="col-lg-6">
            <div>
              <h1 className="fw-bold">About Me</h1>
            </div>
            <div className="my-5">
              <h4 className="fw-bold">哈囉，我是明泓儒</h4>
              <p>
                先前任職於音樂出版社，協助樂譜製作和錄音、編曲、混音。近日剛完成資展國際的『前端工程師養成班』進修課程，對於前端領域深深著迷！
              </p>
            </div>
            <div className="my-5">
              <h4 className="fw-bold">我的技能</h4>
              <p>
                我精通多項技術，擁有開發經驗。我熟悉 JavaScript、React.js 和
                Bootstrap 等前端技術。此外，我還具有 Express.js、PHP 和 MySQL
                等後端開發技能。
              </p>
              <div className="row my-4">
                <div className="col-lg-6">
                  <div className="mb-4">
                    <p className="fw-bold">JavaScript</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '80%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">React.Js</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '85%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">Bootstrap</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '75%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-4">
                    <p className="fw-bold">Express.Js</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '80%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">PHP</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '70%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="fw-bold">MySQL</p>
                    <div className="progress border border-dark rounded-0">
                      <div
                        className="progress-bar"
                        style={{ width: '65%', margin: '0.15rem' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button
                  className="btn btn-outline-dark py-2 px-4 border border-2 border-dark fw-bold"
                  onClick={togglePopup}>
                  查看更多
                </button>
              </div>
              {showPopup && (
                <div className="bg-black bg-opacity-75 w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center popup">
                  <div className="container h-75 mx-4">
                    <div className="position-relative mb-lg-4 mb-3">
                      <RxCrossCircled
                        className="fs-1 text-white text-center popup-close position-absolute buttom-100 end-0"
                        role="button"
                        onClick={() => {
                          setShowPopup();
                        }}
                      />
                    </div>
                    <div className="bg-white rounded p-4 p-lg-5 h-100 overflow-auto">
                      <div className="row gy-5 container">
                        <div className="col-12 col-lg-6">
                          <h2>
                            <span className="custom-border pb-2 fw-bold">
                              個人資料
                            </span>
                          </h2>
                          <div className="row mt-5">
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  中文姓名
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary fw-bold">
                                  明泓儒
                                </span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  年齡
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary">28</span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  國籍
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary  fw-bold">
                                  台灣
                                </span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  居住地
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary  fw-bold">
                                  台中市
                                </span>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  英文姓名
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary ">Tony</span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  電話
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary ">
                                  0970269853
                                </span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary">Gmail</span>
                                <span className="me-1">:</span>
                                <span className="text-primary ">
                                  gsn94561266
                                </span>
                              </div>
                              <div className="mb-3">
                                <span className="text-secondary fw-bold">
                                  語言
                                </span>
                                <span className="me-1">:</span>
                                <span className="text-primary  fw-bold">
                                  中文、英文
                                </span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <a
                              href={
                                process.env.PUBLIC_URL + '/files/Tony_CV.pdf'
                              }
                              className="btn btn-outline-dark rounded-pill py-2 px-4 border border-2 border-dark fw-bold"
                              download>
                              下載履歷
                            </a>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h2>
                            <span className="custom-border pb-2 fw-bold">
                              成就
                            </span>
                          </h2>

                          <div className="row my-4">
                            <div className="col-12 col-sm-6 p-3">
                              <div className="p-2 card">
                                <h1
                                  className="m-4 text-primary"
                                  style={{ fontSize: '3rem' }}>
                                  05<span className="fs-2 fw-light m-1">+</span>
                                </h1>
                                <div className="d-flex">
                                  <div className="bg-dark line mx-4"></div>
                                  <h4 className="m-4 fw-bold text-secondary">
                                    工作年資
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-6 p-3">
                              <div className="p-2 card">
                                <h1
                                  className="m-4 text-primary"
                                  style={{ fontSize: '3rem' }}>
                                  03<span className="fs-2 fw-light m-1">+</span>
                                </h1>
                                <div className="d-flex">
                                  <div className="bg-dark line mx-4"></div>
                                  <h4 className="m-4 fw-bold text-secondary">
                                    完成專案
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6 p-3">
                              <div className="p-2 card">
                                <h1
                                  className="m-4 text-primary"
                                  style={{ fontSize: '3rem' }}>
                                  03<span className="fs-2 fw-light m-1">+</span>
                                </h1>
                                <div className="d-flex">
                                  <div className="bg-dark line mx-4"></div>
                                  <h4 className="m-4 fw-bold text-secondary">
                                    程式語言
                                  </h4>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 col-sm-6 p-3">
                              <div className="p-2 card">
                                <h1
                                  className="m-4 text-primary"
                                  style={{ fontSize: '3rem' }}>
                                  15<span className="fs-2 fw-light m-1">+</span>
                                </h1>
                                <div className="d-flex">
                                  <div className="bg-dark line mx-4"></div>
                                  <h4 className="m-4 fw-bold text-secondary">
                                    獲獎紀錄
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h2>
                            <span className="custom-border pb-2 fw-bold">
                              工作經歷
                            </span>
                          </h2>
                          <div className="border-start ps-4 ps-lg-5 my-5 position-relative">
                            <BsBriefcase className="bg-primary text-white about-logo rounded-4" />
                            <div className="pb-3 pt-2">
                              <span
                                className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold"
                                style={{ fontSize: '0.5rem' }}>
                                2019 - 2022
                              </span>
                            </div>
                            <div className="row align-items-center">
                              <h5 className="col-auto pe-0 fw-bold">
                                製譜人員 -
                              </h5>
                              <h6 className="col-auto  fw-bold">
                                麥書國際文化事業有限公司
                              </h6>
                            </div>
                            <p className="text-secondary">
                              這份工作讓我有機會參與各種音樂專案，與音樂家和創作者合作，將他們的音樂創意轉化為具體的樂譜。我努力確保樂譜的準確性和易於演奏性，以提供給音樂學生和表演者們一個優質的學習和演奏資源。
                            </p>
                          </div>
                          <div className="border-start ps-4 ps-lg-5 my-5 position-relative">
                            <BsBriefcase className="bg-primary text-white about-logo rounded-4" />
                            <div className="pb-3">
                              <span
                                className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold"
                                style={{ fontSize: '0.5rem' }}>
                                2014 - 2019
                              </span>
                            </div>
                            <div className="row align-items-center">
                              <h5 className="col-auto pe-0 fw-bold">
                                音樂老師 -
                              </h5>
                              <h6 className="col-auto fw-bold">
                                M & J 新古典音樂藝術中心
                              </h6>
                            </div>
                            <p className="text-secondary">
                              我與學生們一起探索音樂，教授他們技巧、表達和音樂理解。我致力於培養學生們的音樂才能，啟發他們的創造力，並見證他們在音樂領域中的成長和進步。
                            </p>
                          </div>
                        </div>
                        <div className="col-12 col-lg-6">
                          <h2>
                            <span className="custom-border pb-2 fw-bold">
                              學歷
                            </span>
                          </h2>
                          <div className="border-start ps-4 ps-lg-5 my-5 position-relative">
                            <BsBook className="bg-primary text-white about-logo rounded-4" />
                            <div className="pb-3">
                              <span
                                className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold"
                                style={{ fontSize: '0.5rem' }}>
                                2022 - 2023
                              </span>
                            </div>
                            <div className="row align-items-center">
                              <h5 className="col-auto pe-0 fw-bold">
                                前端工程師就業養成班 -
                              </h5>
                              <h6 className="col-auto fw-bold">
                                iSpan資展國際(資策會)
                              </h6>
                            </div>
                            <p className="text-secondary">
                              在這個課程中，我學習了前端開發的核心技能，還學到了各種框架和工具的應用。通過實作專案和實際案例，能夠更好理解並應用所學知識。這個課程為我打下了成為優秀前端工程師的基礎。
                            </p>
                          </div>
                          <div className="border-start ps-4 ps-lg-5 my-5 position-relative">
                            <BsBook className="bg-primary text-white about-logo rounded-4" />
                            <div className="pb-3">
                              <span
                                className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold"
                                style={{ fontSize: '0.5rem' }}>
                                2013 - 2017
                              </span>
                            </div>
                            <div className="row align-items-center">
                              <h5 className="col-auto pe-0 fw-bold">
                                中國音樂學系 -
                              </h5>
                              <h6 className="col-auto fw-bold">
                                國立臺灣藝術大學
                              </h6>
                            </div>
                            <p className="text-secondary">
                              這個學系培養我在中國音樂領域的專業知識和技能。我們學習中國音樂理論、演奏技巧、音樂史和音樂文化等，並有機會實踐和表演。在這裡能夠發展自己的音樂才能，與同學一起學習和成長。
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='col-lg-1'></div>
          <div className="col-lg-4 text-center">
            <div className="container">
              <img
                className="rounded about-img py-5 w-100"
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
