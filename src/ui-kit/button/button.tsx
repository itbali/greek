import styles from './button.module.scss';

type TButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export const Button = ({ children, onClick, className }: TButtonProps) => {
  return (
    <button className={`${styles.root} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
