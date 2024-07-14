import { relative } from 'path';
import { css } from '../../../styled-system/css';

export const carouselVariants = {
  container: css({
    position: 'relative',
    maxWidth: '1200px',
    width: 'max-content',
    overflowX: 'scroll',

    display: 'flex',
    alignItems: 'center',
    justifyContent: ' center',

    '@media (min-width: 768px)': {
      overflowX: 'hidden',
      maxWidth: 'fit-content',
    },
  }),

  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: ' center',

    transition: 'transform 0.5s ease',

    overflowX: 'hidden',
    marginTop: '35px',
    gap: '2rem',
  }),

  card: css({
    flex: '0 0 auto',
    width: 'auto',
    height: '200px',
    marginRight: '20px',

    backgroundColor: 'transparent',
    borderRadius: '8px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  }),

  arrowContainer: css({
    position: 'absolute',
    left: '20px',

    top: '0',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '10',

    '@media (min-width: 768px)': {
      left: '0',
    },
  }),

  arrow: css({
    position: 'relative',
    bottom: '4px',
    color: 'white',
    border: 'none',

    width: '20px',
    height: '20px',
    cursor: 'pointer',
  }),

  title: css({
    color: 'white',
    fontSize: '14px',

    marginLeft: '10px',
    marginRight: '10px',
  }),

  subtitle: css({
    color: 'lightPurple',
    fontSize: '12px',
  }),

  subtitleValue: css({
    color: 'green',
    fontSize: '12px',
    marginLeft: '5px',
    marginRight: '15px',
  }),
};
