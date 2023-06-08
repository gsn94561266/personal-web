import React, { useState } from 'react';
import './Components.scss';
import data from './Portfolio.json';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ReactPlayer from 'react-player';

const Portfolio = React.forwardRef((props, ref) => {
  const [showPopup, setShowPopup] = useState();

  const CustomPrevArrow = ({ onClick }) => (
    <div className="position-absolute top-50 start-0 translate-middle arrow">
      <BsArrowLeft
        role="button"
        size="4rem"
        onClick={onClick}
        className="text-secondary border border-secondary border-2 rounded-circle p-3 hover-black"
      />
    </div>
  );
  const CustomNextArrow = ({ onClick }) => (
    <div className="position-absolute top-50 start-100 translate-middle arrow">
      <BsArrowRight
        role="button"
        size="4rem"
        onClick={onClick}
        className="text-secondary border border-secondary border-2 rounded-circle p-3 hover-black"
      />
    </div>
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    draggable: false,
  };
  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '',
    prevArrow: '',
  };

  return (
    <div className="component bg-info" ref={ref}>
      <div className="container py-5">
        <div className="m-2">
          <h1 className="fw-bold">作品集</h1>
          <p className="fw-bold fs-4 text-secondary mt-4">
            探索我在不同領域的創作，通過設計和創意將想法轉化為現實。
          </p>
        </div>
        <div className="my-5 mx-3 mx-xl-0 d-lg-block d-none">
          <Slider {...settings}>
            {data.map((v, i) => (
              <div className="p-2" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}${v.img}`}
                  alt={v.img}
                  className="rounded-3 w-100"
                  role="button"
                  onClick={() => {
                    setShowPopup(v.id);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="my-5 mx-3 d-lg-none d-block">
          <Slider {...mobileSettings}>
            {data.map((v, i) => (
              <div className="p-2" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}${v.img}`}
                  alt={v.img}
                  className="rounded-3 w-100"
                  role="button"
                  onClick={() => {
                    setShowPopup(v.id);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {showPopup &&
        data
          .filter((v) => v.id === showPopup)
          .map((v, i) => {
            return (
              <div
                className="bg-black bg-opacity-75 w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center popup"
                key={i}>
                <div className="container h-75">
                  <div className="position-relative mb-lg-4 mb-3">
                    <RxCrossCircled
                      className="fs-1 text-white text-center popup-close position-absolute buttom-100 end-0"
                      role="button"
                      onClick={() => {
                        setShowPopup();
                      }}
                    />
                  </div>
                  <div className="bg-white rounded p-3 p-lg-5 h-100 overflow-auto">
                    <img
                      src={`${process.env.PUBLIC_URL}${v.preview}`}
                      alt={v.preview}
                      className="w-100"
                      role="button"
                    />
                    <div className="row my-5">
                      <div className="col-12 col-lg-7">
                        <h3 className="mb-3 fw-bold">{v.title}</h3>
                        <p>{v.description}</p>
                        <div className="">
                          <ReactPlayer
                            url={v.video}
                            controls={true}
                            className="w-100"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-1"></div>
                      <div className="col-12 col-lg-4">
                        <h5 className="fw-bold">技術</h5>
                        <p>{v.technology}</p>
                        <h5 className="fw-bold">負責項目</h5>
                        <p>{v.function}</p>
                        <h5 className="fw-bold">日期</h5>
                        <p>{v.date}</p>
                        {v.link && (
                          <>
                            <h5 className="fw-bold">連結</h5>
                            <p className="text-break">
                              <a
                                href={v.link}
                                target="_blank"
                                rel="noopener noreferrer">
                                {v.link}
                              </a>
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
});

export default Portfolio;
