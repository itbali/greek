import styles from './layout.module.scss';
import { MutableRefObject } from 'react';

type TLayoutProps = {
  children: React.ReactNode;
  videoSrc: string;
  videoRef: MutableRefObject<HTMLVideoElement | null>;
};

export const Layout = ({ children, videoSrc, videoRef }: TLayoutProps) => {
  return (
    <div className={styles.root}>
      <video autoPlay ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
