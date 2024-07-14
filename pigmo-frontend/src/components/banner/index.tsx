'use client';

import { Button } from '@/components/button';
import { bannerVariants } from './styles';
import Image from 'next/image';

export const Banner = () => {
  return (
    <div className={bannerVariants.container}>
      <div className={bannerVariants.content}>
        <h1 className={bannerVariants.principalTitle}>
          Boas vindas ao
          <span className={bannerVariants.title}>
            {' '}
            Pigmo<span className={bannerVariants.pigmo}>!</span>
          </span>
        </h1>

        <div className={bannerVariants.subtitle}>
          <span className={bannerVariants.describe}>
            Jogue inteligente conosco. Crie sua conta ou entre agora para ganhar
            recompensas.
          </span>
        </div>

        <div className={bannerVariants.buttonContainer}>
          <Button variant="default">QUERO ME REGISTRAR</Button>

          <Button variant="buttonIco">
            <Image
              width={20}
              height={20}
              src="/assets/bannerImages/googleIco.svg"
              alt="google"
            />
          </Button>
          <Button variant="buttonIco">
            <Image
              width={20}
              height={20}
              src="/assets/bannerImages/wolfIco.svg"
              alt="wolf"
            />
          </Button>
          <Button variant="buttonIco">
            <Image
              width={20}
              height={20}
              src="/assets/bannerImages/burguer.svg"
              alt="play"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
