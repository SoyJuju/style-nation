import '../../../styles/main.css';

import MainHeading from '../../components/home/MainHeading';
import CarBrands from '../../components/home/CarBrands';
import CarTags from '../../components/home/CarTags';

export default function Home() {
  return (
    <main>
      <MainHeading />
      <CarBrands />
      <CarTags />
    </main>
  );
}
