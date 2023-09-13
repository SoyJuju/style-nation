import '../../../styles/main.css';

import toyota from '../../../assets/toyota-icon.svg';
import ford from '../../../assets/ford-icon.svg';
import baic from '../../../assets/baic-icon.svg';
import kia from '../../../assets/kia-icon.svg';
import hyundai from '../../../assets/hyundai-icon.svg';

export default function CarBrands() {
  return (
    <section className="car-brands | padding-block-300" id="featured">
      <h1 className="car-brands--title | fs-small-800 fw-bold padding-block-500">
        Featured Brands
      </h1>
      <div className="car-brands--container | small-container">
        <img style={{ width: '5rem' }} src={toyota.src} alt="" />
        <img style={{ width: '7rem' }} src={ford.src} alt="" />
        <img style={{ width: '5.65rem' }} src={baic.src} alt="" />
        <img style={{ width: '6.2rem' }} src={kia.src} alt="" />
        <img style={{ width: '6rem' }} src={hyundai.src} alt="" />
      </div>
    </section>
  );
}
