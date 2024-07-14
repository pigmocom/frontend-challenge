export type ButtonTypes = {
  variant?: 'default' | 'login' | 'buttonIco';
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
};
