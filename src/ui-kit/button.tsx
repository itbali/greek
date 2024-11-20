import styles from './button.module.scss';

type TButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: TButtonProps) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {children}
    </button>
  );
};
