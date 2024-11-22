import styles from './layout.module.scss';
import { MutableRefObject } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../store/store.ts';
import { Button } from '../ui-kit/button/button.tsx';

type TLayoutProps = {
  children: React.ReactNode;
  videoSrc: string;
  videoRef: MutableRefObject<HTMLVideoElement | null>;
  withGoBackButton?: boolean;
};

export const Layout = ({ children, videoSrc, videoRef, withGoBackButton }: TLayoutProps) => {
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(setCurrentPage('home'));
  };

  return (
    <div className={styles.root}>
      <video ref={videoRef} autoPlay playsInline src={videoSrc} />
      {withGoBackButton && (
        <Button className={styles.goBack} onClick={goBack}>
          ← home
        </Button>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
