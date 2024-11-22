import styles from './input.module.scss';

type TInputProps = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Input = ({ onChange, value, className }: TInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input className={`${styles.root} ${className}`} value={value} onChange={handleChange} />;
};

export default Input;
