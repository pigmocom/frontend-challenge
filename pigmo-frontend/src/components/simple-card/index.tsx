import React, { ReactNode } from 'react';
import { css } from '../../../styled-system/css';
import { SimpleCardProps } from './types';

export const SimpleCard = ({ children }: SimpleCardProps) => {
  return <div className={cardStyles.card}>{children}</div>;
};

const cardStyles = {
  card: css({
    width: '200px',
    height: '200px',
    borderRadius: '8px',
  }),
};
