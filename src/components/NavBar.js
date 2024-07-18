import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const MenuItems = [
  {
    title: 'Home',
    ref: 'Home',
  },
  {
    title: 'ABOUT ME',
    ref: 'About',
  },
  {
    title: 'MY WORK',
    ref: 'Portfolio',
  },
  {
    title: 'CONTACT ME',
    ref: 'Contact',
  },
];

const NavBar = ({ refSelect, refs, hamburger, setHamburger, visible }) => {
  return (
    <nav className={`fixed-top bg-white ${visible ? 'shadow-sm' : ''}`}>
      <div className="d-flex justify-content-between align-items-center p-2">
        <div
          className="ms-lg-3"
          role="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
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
                className={`text-dark fw-bold mx-2 px-3 py-2 ${
                  v.ref === refSelect ? 'rounded-1 bg-dark bg-opacity-10' : ''
                }`}
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
          <div className="bg-black rounded-circle" role="button">
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
            hamburger ? 'fixed-top hamburger-menu active' : 'fixed-top hamburger-menu'
          }>
          <div className="d-block d-lg-none vh-100 position-relative text-white">
            <div className="border-bottom border-dark p-2">
              <span className="fw-bold fs-2">
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
                    className={`my-2 p-2 ${
                      v.ref === refSelect
                        ? 'rounded-1 bg-white bg-opacity-25'
                        : ''
                    }`}
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
              <div className="m-2">
                <img
                  className="menu-avatar rounded-circle"
                  src={process.env.PUBLIC_URL + '/images/main.jpg'}
                  alt="avatar"
                />
              </div>
              <div className="d-flex flex-column text-break p-1">
                <span className="fs-5 fw-bold">明泓儒</span>
                <span className="fs-6 text-secondary">
                  gsn94561266@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
