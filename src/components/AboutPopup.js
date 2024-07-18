import { RxCrossCircled, RxPlus } from 'react-icons/rx';
import { BsBriefcase, BsBook } from 'react-icons/bs';

const AboutPopup = ({ setShowPopup }) => {
  return (
    <div className="bg-black bg-opacity-75 w-100 h-100 position-fixed top-0 start-0 d-flex justify-content-center align-items-center popup">
      <div className="container h-75">
        <div className="mb-2 text-end">
          <RxCrossCircled
            className="fs-1 text-white"
            role="button"
            onClick={() => {
              setShowPopup(false);
            }}
          />
        </div>
        <div className="bg-white rounded p-4 p-sm-5 h-100 overflow-auto justify-content-center">
          <div className="row gy-5">
            <div className="col-xl-6">
              <h2>
                <span className="custom-border pb-2 fw-bold">個人資料</span>
              </h2>
              <div className="row mt-5">
                <div className="col-sm-6">
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">中文姓名</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-bold">明泓儒</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">英文姓名</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-semibold">Tony</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">國籍</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-bold">台灣</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">居住地</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-bold">台中市</span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">年齡</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-semibold">29</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">電話</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-semibold">0970269853</span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50">Gmail</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-semibold">
                      gsn94561266
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-black-50 fw-bold">語言</span>
                    <span className="me-1">:</span>
                    <span className="text-primary fw-bold">中文、英文</span>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href={process.env.PUBLIC_URL + '/files/明泓儒.pdf'}
                  className="btn btn-outline-dark rounded-pill py-2 px-4 border border-2 border-dark fw-bold"
                  download>
                  下載履歷
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <h2>
                <span className="custom-border pb-2 fw-bold">成就</span>
              </h2>
              <div className="row mt-4">
                <div className="col-12 col-sm-6 p-3">
                  <div className="p-4 card m-0">
                    <h1 className="text-primary about-amount">
                      06
                      <RxPlus className="fs-1 text-primary mb-1" />
                    </h1>
                    <div className="d-flex">
                      <div className="bg-dark about-line me-4 d-none d-sm-block"></div>
                      <h4 className="fw-bold text-secondary fs-5">工作年資</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="p-4 card">
                    <h1 className="text-primary about-amount">
                      03
                      <RxPlus className="fs-1 text-primary mb-1" />
                    </h1>
                    <div className="d-flex">
                      <div className="bg-dark about-line me-4 d-none d-sm-block"></div>
                      <h4 className="fw-bold text-secondary fs-5">完成專案</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="p-4 card">
                    <h1 className="text-primary about-amount">
                      03
                      <RxPlus className="fs-1 text-primary mb-1" />
                    </h1>
                    <div className="d-flex">
                      <div className="bg-dark about-line me-4 d-none d-sm-block"></div>
                      <h4 className="fw-bold text-secondary fs-5">程式語言</h4>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 p-3">
                  <div className="p-4 card">
                    <h1 className="text-primary about-amount">
                      15
                      <RxPlus className="fs-1 text-primary mb-1" />
                    </h1>
                    <div className="d-flex">
                      <div className="bg-dark about-line me-4 d-none d-sm-block"></div>
                      <h4 className="fw-bold text-secondary fs-5">獲獎紀錄</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <h2>
                <span className="custom-border pb-2 fw-bold">工作經歷</span>
              </h2>
              <div className="border-start ps-4 ps-lg-5 ms-3 mt-5 position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center about-icon-container">
                  <BsBriefcase className="text-white about-icon" />
                </div>
                <div className="pt-2">
                  <span className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold about-date">
                    2023 -
                  </span>
                </div>
                <div className="row align-items-center mt-4">
                  <h5 className="col-auto pe-0 fw-bold">前端工程師 -</h5>
                  <h6 className="col-auto fw-bold">鉅恒投資有限公司</h6>
                </div>
                <p className="text-secondary mt-2">
                  負責 ERP 和 WMS 系統的開發與維護，並使用 React、TypeScript 和
                  CSS 框架來創建各種表格、圖表和小部件。此外，運用 GitHub
                  Actions 進行自動化，使用 Docker 進行部署，並將自定義功能封裝為
                  npm 模組，以提高開發效率和系統性能。
                </p>
              </div>
              <div className="border-start ps-4 ps-lg-5 ms-3 mt-5 position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center about-icon-container">
                  <BsBriefcase className="text-white about-icon" />
                </div>
                <div className="pt-2">
                  <span className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold about-date">
                    2019 - 2022
                  </span>
                </div>
                <div className="row align-items-center mt-4">
                  <h5 className="col-auto pe-0 fw-bold">製譜人員 -</h5>
                  <h6 className="col-auto fw-bold">麥書國際文化事業有限公司</h6>
                </div>
                <p className="text-secondary mt-2">
                  這份工作讓我有機會參與各種音樂專案，與音樂家和創作者合作，將他們的音樂創意轉化為具體的樂譜。我努力確保樂譜的準確性和易於演奏性，以提供給音樂學生和表演者們一個優質的學習和演奏資源。
                </p>
              </div>
              <div className="border-start ps-4 ps-lg-5 ms-3 mt-5 position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center about-icon-container">
                  <BsBriefcase className="text-white about-icon" />
                </div>
                <div className="pt-2">
                  <span className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold about-date">
                    2014 - 2019
                  </span>
                </div>
                <div className="row align-items-center mt-4">
                  <h5 className="col-auto pe-0 fw-bold">音樂老師 -</h5>
                  <h6 className="col-auto fw-bold">M & J 新古典音樂藝術中心</h6>
                </div>
                <p className="text-secondary mt-2">
                  我與學生們一起探索音樂，教授他們演奏技巧、表達和音樂理解，培養學生們的音樂才能，啟發他們的創造力，並見證他們在音樂領域中的成長和進步。
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <h2>
                <span className="custom-border pb-2 fw-bold">學歷</span>
              </h2>
              <div className="border-start ps-4 ps-lg-5 ms-3 mt-5 position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center about-icon-container">
                  <BsBook className="text-white about-icon" />
                </div>
                <div className="pt-2">
                  <span className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold about-date">
                    2022 - 2023
                  </span>
                </div>
                <div className="row align-items-center mt-4">
                  <h5 className="col-auto pe-0 fw-bold">
                    前端工程師就業養成班 -
                  </h5>
                  <h6 className="col-auto fw-bold">iSpan資展國際(資策會)</h6>
                </div>
                <p className="text-secondary mt-2">
                  在這個課程中，我學習了前端開發的核心技能，還學到了各種框架和工具的應用。通過實作專案，能夠更好理解並應用所學知識，也為我打下了成為優秀前端工程師的基礎。
                </p>
              </div>
              <div className="border-start ps-4 ps-lg-5 ms-3 mt-5 position-relative">
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center about-icon-container">
                  <BsBook className="text-white about-icon" />
                </div>
                <div className="pt-2">
                  <span className="py-2 px-3 rounded-pill bg-secondary bg-opacity-25 fw-semibold about-date">
                    2013 - 2017
                  </span>
                </div>
                <div className="row align-items-center mt-4">
                  <h5 className="col-auto pe-0 fw-bold">中國音樂學系 -</h5>
                  <h6 className="col-auto fw-bold">國立臺灣藝術大學</h6>
                </div>
                <p className="text-secondary mt-2">
                  這個學系培養我在中國音樂領域的專業知識和技能，其中包含中國音樂理論、演奏技巧、音樂史和音樂文化等，並有機會實踐和表演。在這裡能夠發展自己的音樂才能，與同學一起學習和成長。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPopup;
