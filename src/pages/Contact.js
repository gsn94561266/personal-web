import React from 'react';
import { FiMail, FiPhone, FiMessageCircle } from 'react-icons/fi';

import '../styles/pages.scss';

const Contact = React.forwardRef((props, ref) => {
  const handleMouseMove = (e) => {
    const item = e.currentTarget;
    const boundingRect = item.getBoundingClientRect();
    const mouseX = e.clientX - boundingRect.left;
    const mouseY = e.clientY - boundingRect.top;
    const xAngle = (mouseY / item.offsetHeight - 0.5) * 30;
    const yAngle = -(mouseX / item.offsetWidth - 0.5) * 30;
    item.style.transform = `perspective(1000px) rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
  };

  const handleMouseLeave = (e) => {
    const item = e.currentTarget;
    item.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  return (
    <div className="bg-white" ref={ref}>
      <div className="container py-5">
        <div className="m-2">
          <h1 className="fw-bold">聯絡</h1>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-4 mt-2">
          <div className="col">
            <div
              className="p-3 bg-info rounded d-flex"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contact-icon-container">
                <FiPhone className="text-white contact-icon" />
              </div>
              <div className="text-start ms-4">
                <h4 className="fw-bold">電話</h4>
                <p className="text-secondary">0970269853</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="p-3 bg-info rounded d-flex"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contact-icon-container">
                <FiMail className="text-white contact-icon" />
              </div>
              <div className="text-start ms-4">
                <h4>Gmail</h4>
                <p className="text-secondary">gsn94561266</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="p-3 bg-info rounded d-flex"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}>
              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center contact-icon-container">
                <FiMessageCircle className="text-white contact-icon" />
              </div>
              <div className="text-start ms-4">
                <h4>LINE</h4>
                <p className="text-secondary">0970269853</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
