import '../../../styles/main.css';

import lexus570 from '../../../assets/lexus-570-listing.jpg';
import accent from '../../../assets/accent-listing.jpg';
import wildtrek from '../../../assets/wild-trek-listing.jpg';
import axio from '../../../assets/axio-listing.jpg';
import beijing from '../../../assets/beijing-listing.jpg';
import sportage from '../../../assets/sportage-listing.jpg';
import adventure from '../../../assets/adventure-listing.jpg';

function Car(CarImage, CarName) {
  return (
    <div className="car-tags--car">
      <div className="car-tags--car-container">
        <img src={CarImage} alt="" />
        <p className="car-tags--car-title | fw-bold padding-block-300 fs-small-450">
          {CarName}
        </p>
        <p className="car-tags--car-subtitle | fs-small-300">
          Contact for more information
        </p>
      </div>
    </div>
  );
}

export default function CarTags() {
  return (
    <section className="car-tags | padding-block-800" id="cars">
      <h1 className="main-subheading padding-block-500">Featured Cars</h1>
      <div className="car-tags--container | small-container">
        {Car(lexus570.src, 'Lexus LX 570')}
        {Car(sportage.src, 'KIA Sportage X-Line')}
        {Car(beijing.src, 'BAIC Beijing X7')}
        {Car(axio.src, 'Toyota Corolla Axio')}
        {Car(wildtrek.src, 'Ford WildTrak')}
        {Car(accent.src, 'Hyundai Accent')}
        {Car(adventure.src, 'Toyota Hilux Adventure')}
      </div>
    </section>
  );
}
