import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IoMdMail } from 'react-icons/io';
import { ImPhone } from 'react-icons/im';
import { SiLine } from 'react-icons/si';
import { CgFacebook, CgInstagram } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { BiSolidDownArrow } from 'react-icons/bi';

const Contact = React.forwardRef((props, ref) => {
  const [showPhone, SetShowPhone] = useState(false);
  const [showEmail, SetShowEmail] = useState(false);

  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className="contact-container bg-white d-flex align-items-center position-relative"
      ref={ref}>
      <div className="container" ref={inViewRef}>
        <div className="title text-end">
          <h1 className="cormorant-unicase fw-bold">CONTACT ME</h1>
        </div>
        <div className={`contact-item text-center ${inView ? 'in-view' : ''}`}>
          <div className="my-5 d-md-flex align-items-end pb-5">
            <div className="order-2">
              <h3 className="fw-normal my-md-0 my-4 ps-0 ps-md-5">
                CONTACT ME
              </h3>
              <div className="d-md-block d-none">
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
              </div>
            </div>
            <div className="order-1">
              <span className="position-relative">
                <ImPhone
                  className="contact-icon mx-3"
                  onMouseEnter={() => SetShowPhone(true)}
                  onMouseLeave={() => SetShowPhone(false)}
                />
                <div
                  className={`show-detail p-3 ${showPhone ? 'active' : ''}`}
                  onMouseEnter={() => SetShowPhone(true)}
                  onMouseLeave={() => SetShowPhone(false)}>
                  <BiSolidDownArrow />
                  <span className="contact-text text-nowrap fs-6">
                    0970-269-853
                  </span>
                </div>
              </span>

              <a
                href="https://line.me/ti/p/NSJtShsEaf"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                <SiLine className="contact-icon mx-3" />
              </a>

              <span
                className="position-relative"
                onMouseEnter={() => SetShowEmail(true)}
                onMouseLeave={() => SetShowEmail(false)}>
                <IoMdMail
                  className="contact-icon mx-3"
                  onMouseEnter={() => SetShowEmail(true)}
                  onMouseLeave={() => SetShowEmail(false)}
                />
                <div
                  className={`show-detail p-3 ${showEmail ? 'active' : ''}`}>
                  <BiSolidDownArrow />
                  <span className="contact-text fs-6 email-text">
                    gsn94561266@gmail.com
                  </span>
                </div>
              </span>

              <div className="d-md-block d-none">
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
              </div>
            </div>
          </div>

          <div className="my-5 d-md-flex align-items-end justify-content-end">
            <div>
              <h3 className="fw-normal m-md-0 my-4 pe-md-5 pe-0">FOLLOW ME</h3>
              <div className="d-md-block d-none">
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
              </div>
            </div>
            <div className="no-wrap">
              <a
                href="https://www.instagram.com/tonym0606"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                <CgInstagram className="contact-icon mx-3" />
              </a>
              <a
                href="https://github.com/gsn94561266"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                <BsGithub className="contact-icon mx-3" />
              </a>
              <a
                href="https://www.facebook.com/ahung8"
                className="text-dark"
                target="_blank"
                rel="noopener noreferrer">
                <CgFacebook className="contact-icon mx-3" />
              </a>
              <div className="d-md-block d-none">
                <div className="border-bottom border-2 border-dark mt-1"></div>
                <div className="border-bottom border-2 border-dark mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute bottom-0 text-center w-100 py-3 border-top">
        © Tony All Rights Reserved.
      </div>
    </div>
  );
});

export default Contact;
