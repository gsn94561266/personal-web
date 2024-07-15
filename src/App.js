import { useEffect, useState, useRef } from 'react';
import { GoTriangleUp } from 'react-icons/go';

import './styles/App.scss';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [hamburger, setHamburger] = useState(false);
  const [toTop, setToTop] = useState(false);
  const [visible, setVisible] = useState(false);
  const [refSelect, setRefSelect] = useState('Home');
  const refs = {
    Home: useRef(null),
    About: useRef(null),
    Portfolio: useRef(null),
    // Contact: useRef(null),
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

  const backgroundStyle = {
    background: `rgb(26, 26, 26)`,
    // background: `rgb(26, 26, 26) url(${process.env.PUBLIC_URL}/images/ABOUT_bg.svg) repeat 100% fixed`,
  };

  return (
    <div className="App">
      <NavBar
        refSelect={refSelect}
        refs={refs}
        hamburger={hamburger}
        setHamburger={setHamburger}
        visible={visible}
      />

      <main style={backgroundStyle}>
        <Home ref={refs.Home} />
        <About ref={refs.About} />
        <Portfolio ref={refs.Portfolio} />
        {/* <Contact ref={refs.Contact} /> */}
      </main>

      {toTop && (
        <GoTriangleUp
          className="text-dark p-3 to-top"
          size="3rem"
          role="button"
          onClick={() => {
            window.scrollTo(0, 0);
            setHamburger(false);
          }}
        />
      )}
    </div>
  );
}

export default App;
