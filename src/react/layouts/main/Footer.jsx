import '../../../styles/main.css';

import facebook from '../../../assets/facebook-icon.svg';

export default function Footer() {
  return (
    <footer className="footer | padding-block-700">
      <div className="footer--container | container bg-primary-100">
        <h1 className="footer--title | fs-small-800 text-primary-400 padding-block-800 fw-bold">
          Contact Information
        </h1>
        <div className="footer--info | padding-block-800">
          <div className="footer--tags">
            <h2>OFFICE</h2>
            <p className="footer--detail">
              Myanmar&mdash; <br />
              ChanMyaTharZi Township, <br />
              39C Street, Between 53 & 54
            </p>
          </div>
          <div className="footer--tags">
            <h2>NEED HELP</h2>
            <p className="fs-small-600 text-primary-400">+959 785 666 777</p>
            <a href="mailto:stylezaw@gmail.com" className="footer--detail">
              stylezaw@gmail.com
            </a>
            <br />
            <a
              href="https://www.facebook.com/profile.php?id=100010511760254&mibextid=b06tZ0"
              target="_blank"
            >
              <button className="footer--socials-container | square-button">
                <img src={facebook.src} alt="" />
                <div className="footer--socials-text">
                  <p className="fs-small-400 fw-bold">Message me on</p>
                  <p className="fs-small-300">Facebook</p>
                </div>
              </button>
            </a>
          </div>
          <div className="footer--tags">
            <h2>OPENING HOURS</h2>
            <p className="footer--detail">Monday - Friday: 9:00 to 6:00</p>
            <p className="footer--detail">Saturday - Sunday: 8:00 to 5:00</p>
          </div>
        </div>
        <p className="footer--copyright | footer--detail">
          StyleNation &#169; 2023. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
