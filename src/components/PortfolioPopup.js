import ReactPlayer from 'react-player';
import { RxCrossCircled } from 'react-icons/rx';

const PortfolioPopup = ({ showPopupId, data, setShowPopupId }) => {
  return (
    <>
      {showPopupId &&
        data
          .filter((v) => v.id === showPopupId)
          .map((v, i) => {
            return (
              <div
                className="bg-black bg-opacity-75 w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center popup"
                key={i}>
                <div className="container h-75">
                  <div className="mb-2 text-end">
                    <RxCrossCircled
                      className="fs-1 text-white"
                      role="button"
                      onClick={() => {
                        setShowPopupId();
                      }}
                    />
                  </div>
                  <div className="bg-white rounded p-3 p-lg-5 h-100 overflow-auto">
                    <img
                      src={`${process.env.PUBLIC_URL}${v.preview}`}
                      alt={v.title}
                      className="w-100"
                      role="button"
                    />
                    <div className="row mt-5">
                      <div className="col-lg-7">
                        <h3 className="mb-3 fw-bold">{v.title}</h3>
                        <p>{v.description}</p>
                        {v.video && (
                          <div className="ratio ratio-16x9">
                            <ReactPlayer
                              url={v.video}
                              controls={true}
                              className="w-100 h-100"
                            />
                          </div>
                        )}
                      </div>
                      <div className="col-lg-1"></div>
                      <div className="col-lg-4 mt-4 mt-lg-0">
                        <h5 className="fw-bold">技術</h5>
                        <p>{v.technology}</p>
                        <h5 className="fw-bold">負責項目</h5>
                        <p>{v.project}</p>
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
    </>
  );
};

export default PortfolioPopup;
