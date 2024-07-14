import { Props } from './types';

export const criptoIcons: { [key in Props['cripto']]: string } = {
  btc: '/assets/criptos/bitcoin.svg',
  eth: '/assets/criptos/ethereum.svg',
  sol: '/assets/criptos/solana.svg',
  bonk: '/assets/criptos/bonk.svg',
  doge: '/assets/criptos/doge.svg',
  shib: '/assets/criptos/shiba.svg',
  none: '',
};
