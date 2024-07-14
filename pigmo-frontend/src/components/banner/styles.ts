import { css } from '../../../styled-system/css';

export const bannerVariants = {
  container: css({
    width: 'fit-content',
    height: '350px',

    backgroundImage: 'url(/assets/bannerImages/banner.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    flexDirection: 'column',

    margin: '0 auto',
    maxWidth: 'auto',
    padding: '0 20px',

    '@media (min-width: 768px)': {
      width: '100%',
      padding: '0 6rem',
    },

    '@media (min-width: 1400px)': {
      padding: '0 8rem',
    },
  }),

  content: css({
    marginRight: 'auto',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
    padding: '0 3rem',
  }),

  principalTitle: css({
    color: 'white',
    fontSize: '32px',
    lineHeight: '36px',
    fontWeight: '700',
    marginBottom: '24px',
  }),

  title: css({
    color: 'pink',
    fontSize: '32px',
    width: '25ch',
    lineHeight: '36px',
    fontWeight: '700',
    marginBottom: '24px',
  }),

  pigmo: css({ color: 'pink' }),

  subtitle: css({
    maxWidth: '520px',
    width: '42ch',
    marginTop: '10px',
    display: 'flex',
  }),

  describe: css({
    color: 'lightPurple',
    whiteSpace: 'wrap',
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: '400',
    marginBottom: '24px',
  }),

  buttonContainer: css({
    display: 'flex',
  }),
};
