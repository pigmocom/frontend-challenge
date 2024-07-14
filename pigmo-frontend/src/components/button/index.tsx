import { cx } from '../../../styled-system/css';
import { buttonVariants } from './styles';
import { ButtonTypes } from './types';

export const Button = ({
  variant = 'default',
  children,
  onClick,
  title,
}: ButtonTypes) => {
  return (
    <button
      className={cx(buttonVariants[variant])}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};
