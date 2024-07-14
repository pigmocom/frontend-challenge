import { css } from '../../styled-system/css';
import { Banner } from '@/components/banner';
import { Carousel } from '@/components/carousel';
import { CriptoCard } from '@/components/cripto-card';
import { CassinoCard } from '@/components/cassino-card';
import Image from 'next/image';
import { casinoImages } from '@/utils/cassinoData';
import { sportsImage } from '@/utils/sportsData';

const carouselVariants = {
  container: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5rem',

    overflowX: 'auto',
    maxWidth: '1500px',
    width: '550px',

    marginTop: '45px',

    '@media (min-width: 768px)': {
      overflowX: 'hidden',
      maxWidth: 'inherit',
      width: 'inherit',
    },
  }),
};

export default function Home() {
  return (
    <div>
      <Banner />

      <div className={carouselVariants.container}>
        <Carousel showControls title={'CRIPTOMOEDAS'}>
          <CriptoCard green={true} cripto="btc" />
          <CriptoCard green={true} cripto="btc" />
          <CriptoCard green={true} cripto="btc" />
          <CriptoCard green={true} cripto="btc" />
          <CriptoCard green={true} cripto="btc" />
          <CriptoCard green={true} cripto="btc" />
        </Carousel>
      </div>

      <div className={carouselVariants.container}>
        <Carousel showControls title="CASSINO">
          {casinoImages.map((image, index) => (
            <CassinoCard key={index}>
              <Image width={200} height={200} src={image.src} alt={image.alt} />
            </CassinoCard>
          ))}
        </Carousel>
      </div>

      <div className={carouselVariants.container}>
        <Carousel title="ESPORTES">
          {sportsImage.map((image, index) => (
            <CassinoCard key={index}>
              <Image width={200} height={200} src={image.src} alt={image.alt} />
            </CassinoCard>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
