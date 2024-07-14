import { css } from '../../../styled-system/css';

export const buttonVariants = {
  default: css({
    color: 'lightGray',
    backgroundColor: 'pink',
    width: 'auto',
    height: '40px',

    border: 'none',
    borderRadius: '8px',
    padding: '0px 16px',
    backgroundImage: `radial-gradient(50% 100% at 50% 0, lightRed 0%, pink 100%)`,

    boxShadow: `0 3px magenta, inset 0 1px lightRed80`,
    cursor: 'pointer',
    marginRight: '18px',
    fontSize: '14px',
    lineHeight: '16px',
    transition: 'box-shadow 0.2s ease, transform 0.2s ease',
    '&:hover, &:active': {
      boxShadow: `0 3px magenta, inset 0 1px lightRed, inset 0 0 50px -25px lightRed, 0 0 50px -12px pink`,
    },
    '&:active': {
      transform: 'translateY(2px)',
    },
  }),

  login: css({
    color: 'lightGray',
    backgroundColor: 'transparent',
    border: 'none',

    marginRight: '12px',
    marginTop: '3px',

    fontSize: '16px',
    lineHeight: '18px',
    transition: 'color 0.2s ease',
    '&:hover, &:active': {
      color: 'pink',
    },
  }),

  buttonIco: css({
    backgroundColor: 'transparent',
    width: '40px',
    height: '40px',

    border: '1px solid #35243D',
    borderRadius: '8px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s ease',
    marginRight: '8px',

    '&:hover, &:active': {
      borderColor: 'darkPurpleIcons',
      background: `linear-gradient(180deg, rgba(37, 25, 41, 0) 0%, #38253f 100%)`,
      boxShadow: `0px 7px 9.3px -6px magenta`,
    },

    '& img': {
      width: '18px',
    },
  }),
};
