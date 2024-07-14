import Image from 'next/image';
import { Props } from './types';
import { criptoIcons } from './utils';
import { criptoCardVariants } from './styles';

export const CriptoCard = ({ green, cripto }: Props) => {
  return (
    <span className={criptoCardVariants.link}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Image
          width={20}
          height={20}
          src={criptoIcons[cripto]}
          alt={cripto.toUpperCase()}
        />
        <span className={criptoCardVariants.criptoName}>
          {cripto.toUpperCase()}
        </span>

        <div className={criptoCardVariants.criptoValueDiv}>
          <Image
            width={60}
            height={60}
            src="/assets/slider/greenArrow.svg"
            alt={green ? 'Seta Verde' : 'Seta Vermelha'}
          />
          <span className={criptoCardVariants.criptoTextLittle}>2.13%</span>
        </div>
      </div>

      <div
        className={criptoCardVariants.criptoLine}
        style={{ marginTop: '12px' }}
      />

      <div>
        <span className={criptoCardVariants.criptoValue}>$60,390.85</span>
      </div>
      <div className={criptoCardVariants.criptoLine}></div>
      <div
        style={{
          marginTop: '12px',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span className={criptoCardVariants.criptoTextLittle}>24 VOL</span>
        <span className={criptoCardVariants.criptoAmount}>$757M</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span className={criptoCardVariants.criptoTextLittle}>LEVERAGE</span>
        <span className={criptoCardVariants.criptoAmount}>1000x</span>
      </div>
    </span>
  );
};
