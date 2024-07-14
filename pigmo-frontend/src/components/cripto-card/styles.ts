import { css } from '../../../styled-system/css';

export const criptoCardVariants = {
  link: css({
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    width: '182px',
    height: '162px',
    color: 'inherit',
    borderRadius: '8px',
    border: '1px solid #35243D',
    padding: '12px',
    position: 'relative',
    background:
      'linear-gradient(129deg, rgba(0, 0, 0, 0) 63.84%, rgba(204, 149, 215, 0.15) 96.69%)',
    transition: 'all 0.3s',

    '&:hover, &:active': {
      background:
        'linear-gradient(129deg, rgba(204, 149, 215, 0.08) 63.84%, rgba(255, 0, 184, 0.2) 96.69%)',
      transform: 'translateY(-3%)',
    },
  }),

  criptoValueDiv: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: '0 5px',
    borderRadius: '4px',
    top: '7%',
    right: '5%',
    left: '65%',
    border: '1px solid green',

    '& span': {
      color: 'green',
    },
  }),

  criptoLine: css({
    margin: '4px 0 4px 0',
    borderBottom: `1px solid #35243D`,
  }),

  criptoName: css({
    marginRight: '30px',
    marginLeft: '12px',
    color: 'white',
  }),

  criptoValue: css({
    color: 'white',
  }),

  criptoTextLittle: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '12px',
    color: 'lightPurple',
  }),

  criptoAmount: css({
    color: 'white',
    fontSize: '12px',
  }),
};
