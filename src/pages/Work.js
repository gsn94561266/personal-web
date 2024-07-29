import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import data from '../data/Portfolio.json';

const Work = React.forwardRef(({ setShowPopupId, setData }, ref) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

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
  const CustomDot = ({ index, onClick, isActive }) => (
    <div
      className={`bg-transparent rounded-circle position-relative border border-2 custom-dots-container ${
        isActive ? 'border-secondary' : 'border-dark'
      }`}
      onClick={onClick}>
      {isActive && (
        <div className="bg-secondary rounded-circle position-absolute top-50 start-50 translate-middle custom-dot"></div>
      )}
    </div>
  );
  const settings = {
    dots: true,
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
    nextArrow: null,
    prevArrow: null,
    beforeChange: (oldIndex, newIndex) => setActiveIndex(newIndex),
    customPaging: (i) => <CustomDot index={i} isActive={i === activeIndex} />,
  };

  return (
    <div className="work-container" ref={ref}>
      <div className="container text-white" ref={inViewRef}>
        <div className="title">
          <h1 className="cormorant-unicase fw-bold">MY WORK</h1>
        </div>

        <div
          className={`d-lg-block d-none py-5 my-5 slider-item ${
            inView ? 'in-view' : ''
          }`}>
          <Slider {...settings}>
            {data.map((v, i) => (
              <div className="p-3 overflow-hidden rounded-3 slider-img" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}${v.img}`}
                  alt={v.title}
                  className="rounded-3 w-100 slider-img"
                  role="button"
                  onClick={() => {
                    setShowPopupId(v.id);
                    setData(data);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="d-lg-none d-block py-5 my-5">
          <Slider {...mobileSettings}>
            {data.map((v, i) => (
              <div className="mb-3 p-1" key={i}>
                <img
                  src={`${process.env.PUBLIC_URL}${v.img}`}
                  alt={v.title}
                  className="rounded-3 w-100"
                  role="button"
                  onClick={() => {
                    setShowPopupId(v.id);
                    setData(data);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
});

export default Work;
