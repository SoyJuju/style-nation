import '../../../styles/main.css';

import main_heading_image from '../../../assets/main-image-kuro.jpg';

import { useMediaQuery } from '@react-hook/media-query';

export default function MainHeading() {
  const smallScreen = useMediaQuery('(min-width: 40.5em)');

  return (
    <section className="main-heading">
      <div className="main-heading--background-image">
        <img src={main_heading_image.src} alt="" />
      </div>
      <div className="container">
        <div className="main-heading--content">
          <h2 className="fw-medium">2022</h2>
          <h3 className="fw-bold">Lexus KURO</h3>
          <button className="square-button">Learn More</button>
        </div>
      </div>
    </section>
  );
}
