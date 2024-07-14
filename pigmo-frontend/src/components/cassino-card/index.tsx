import React, { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { CassinoCardProps } from './types';

export const CassinoCard = ({ children }: CassinoCardProps) => {
  return <div className={cardStyles.card}>{children}</div>;
};

const cardStyles = {
  card: css({
    width: '200px',
    height: '200px',
    borderRadius: '8px',
  }),
};
