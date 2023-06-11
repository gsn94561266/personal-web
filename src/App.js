import { useEffect, useState, useRef } from 'react';

import './App.scss';

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { GoTriangleUp } from 'react-icons/go';

import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const MenuItems = [
  {
    title: '首頁',
    ref: 'Home',
  },
  {
    title: '關於',
    ref: 'About',
  },
  {
    title: '作品',
    ref: 'Portfolio',
  },
  {
    title: '聯絡',
    ref: 'Contact',
  },
];

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [toTop, setToTop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [refSelect, setRefSelect] = useState('Home');
  const refs = {
    Home: useRef(null),
    About: useRef(null),
    Portfolio: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    const toTopButton = () => {
      window.scrollY > 500 ? setToTop(true) : setToTop(false);
      window.scrollY > 100 ? setVisible(true) : setVisible(false);
    };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement || document.body;

      const lastPageHeight = scrollHeight - clientHeight;
      const isAtBottom = scrollTop >= lastPageHeight;

      Object.keys(refs).forEach((v) => {
        const ref = refs[v];
        if (ref.current && ref.current.offsetTop <= scrollTop) {
          setRefSelect(v);
        }
      });

      if (isAtBottom) {
        const lastPageKey = Object.keys(refs).pop();
        setRefSelect(lastPageKey);
      }
    };

    window.addEventListener('scroll', toTopButton);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', toTopButton);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <nav
        className={
          visible ? 'fixed-top bg-white shadow-sm' : 'fixed-top bg-white'
        }>
        <div className="d-flex justify-content-between p-3 align-items-center">
          <div className="ms-lg-3">
            <span className="text-black fw-bold fs-2">
              <span className="text-primary text-decoration-underline">T</span>
              ony
            </span>
          </div>
          <div className="d-none d-lg-block">
            {MenuItems.map((v, i) => {
              return (
                <span
                  key={i}
                  role="button"
                  className={
                    v.ref === refSelect
                      ? 'text-dark rounded-1 bg-dark bg-opacity-10 mx-2 px-3 py-2 fw-bold'
                      : 'text-dark mx-2 px-3 py-2 fw-bold'
                  }
                  onClick={() => {
                    refs[v.ref].current.scrollIntoView();
                  }}>
                  {v.title}
                </span>
              );
            })}
          </div>
          {/* mobile button */}
          <div className="d-flex d-lg-none">
            <div className="bg-black rounded-circle">
              {!hamburger ? (
                <RxHamburgerMenu
                  className="text-white m-2 fs-3"
                  onClick={() => {
                    setHamburger(!hamburger);
                  }}
                />
              ) : (
                <RxCross1
                  className="text-white m-2 fs-3"
                  onClick={() => {
                    setHamburger(!hamburger);
                  }}
                />
              )}
            </div>
          </div>
          {/* mobile menu */}
          <div
            className={
              hamburger ? 'fixed-top hamburger-menu active' : 'hamburger-menu'
            }>
            <div className="bg-white d-block d-lg-none vh-100 position-relative">
              <div className="border-bottom border-dark p-3">
                <span className="text-black fw-bold fs-2">
                  <span className="text-primary text-decoration-underline">
                    T
                  </span>
                  ony
                </span>
              </div>
              <div className="px-3 py-3">
                {MenuItems.map((v, i) => {
                  return (
                    <div
                      key={i}
                      role="button"
                      className={
                        v.ref === refSelect
                          ? 'my-2 p-2 rounded-1 bg-dark bg-opacity-10'
                          : 'my-2 p-2'
                      }
                      onClick={() => {
                        refs[v.ref].current.scrollIntoView();
                        setHamburger(false);
                      }}>
                      {v.title}
                    </div>
                  );
                })}
              </div>
              <div className="d-flex border-top py-4 position-absolute bottom-0 w-100">
                <div>
                  <img
                    className="menu-avatar rounded-circle mx-2"
                    src={process.env.PUBLIC_URL + '/images/main.png'}
                    alt="avatar"
                  />
                </div>
                <div className="row">
                  <span className="fs-6 fw-bold">明泓儒</span>
                  <span className="fs-6 text-secondary">
                    gsn94561266@gmail.com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Home ref={refs.Home} />
        <About ref={refs.About} />
        <Portfolio ref={refs.Portfolio} />
        <Contact ref={refs.Contact} />
      </main>

      {/* to top */}
      {toTop && (
        <GoTriangleUp
          className="bg-dark text-white p-3 rounded-1 to-top"
          size="3rem"
          role="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      )}
    </div>
  );
}

export default App;
