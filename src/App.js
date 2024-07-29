import { useEffect, useState, useRef } from 'react';
import NavBar from './components/NavBar';
import PortfolioPopup from './components/PortfolioPopup';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './App.scss';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [toTop, setToTop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showPopupId, setShowPopupId] = useState();
  const [data, setData] = useState([]);
  const [refSelect, setRefSelect] = useState('Home');
  const refs = {
    Home: useRef(null),
    About: useRef(null),
    Skill: useRef(null),
    Work: useRef(null),
    Contact: useRef(null),
  };

  const MenuItems = [
    {
      title: 'HOME',
      ref: 'Home',
    },
    {
      title: 'ABOUT ME',
      ref: 'About',
    },
    {
      title: 'MY SKILL',
      ref: 'Skill',
    },
    {
      title: 'MY WORK',
      ref: 'Work',
    },
    {
      title: 'CONTACT ME',
      ref: 'Contact',
    },
  ];

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
        if (ref.current) {
          const { offsetTop } = ref.current;
          if (scrollTop >= offsetTop && scrollTop < offsetTop + 100) {
            setRefSelect(v);
          }
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

  useEffect(() => {
    if (showPopupId) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }

    return () => document.body.classList.remove('lock-scroll');
  }, [showPopupId]);

  const backgroundStyle = {
    background: `rgb(26, 26, 26) url(${process.env.PUBLIC_URL}/images/bg.svg) repeat 100% fixed`,
  };

  return (
    <div className="App">
      <NavBar
        refSelect={refSelect}
        refs={refs}
        hamburger={hamburger}
        setHamburger={setHamburger}
        visible={visible}
        MenuItems={MenuItems}
      />

      <main style={backgroundStyle}>
        <Home ref={refs.Home} />
        <About ref={refs.About} />
        <Skill ref={refs.Skill} />
        <Work
          ref={refs.Work}
          setShowPopupId={setShowPopupId}
          setData={setData}
        />
        <Contact ref={refs.Contact} />
      </main>

      {toTop && !showPopupId && (
        <div
          className="text-black px-2 py-1 to-top cormorant-unicase fs-3 fw-bold"
          role="button"
          onClick={() => {
            window.scrollTo(0, 0);
            setHamburger(false);
          }}>
          <span>U</span>
          <span>P</span>
        </div>
      )}

      {showPopupId && (
        <PortfolioPopup
          showPopupId={showPopupId}
          data={data}
          setShowPopupId={setShowPopupId}
          setData={setData}
        />
      )}
    </div>
  );
}

export default App;
