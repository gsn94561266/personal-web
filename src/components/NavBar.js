import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';

const NavBar = ({
  refSelect,
  refs,
  hamburger,
  setHamburger,
  visible,
  MenuItems,
}) => {
  return (
    <nav className={`fixed-top bg-white ${visible ? 'shadow-sm' : ''}`}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <div
          className="ms-lg-3"
          role="button"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          {/* <img
            className="card-img"
            src={process.env.PUBLIC_URL + '/images/main.jpg'}
            alt="avatar"
          /> */}
        </div>
        <div className="d-none d-lg-block">
          {MenuItems.map((v, i) => {
            return (
              <span
                key={i}
                role="button"
                className={`text-dark fw-bold fs-5 mx-2 px-3 py-2 cormorant-unicase ${
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

        <RxHamburgerMenu
          role="button"
          className="fs-1 d-lg-none"
          onClick={() => {
            setHamburger(!hamburger);
          }}
        />

        {/* mobile menu */}
        <div className={hamburger ? 'hamburger-menu active' : 'hamburger-menu'}>
          <div className="d-block d-lg-none vh-100 position-relative text-white">
            <div className="text-end">
              <RxCross1
                role="button"
                className="fs-1 m-3"
                onClick={() => {
                  setHamburger(!hamburger);
                }}
              />
            </div>
            <div className="px-3 py-3">
              {MenuItems.map((v, i) => {
                return (
                  <div
                    key={i}
                    role="button"
                    className={`my-2 p-2 fs-1 cormorant-unicase ${
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
            <img
              className="menu-avatar"
              src={process.env.PUBLIC_URL + '/images/01-2.png'}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
