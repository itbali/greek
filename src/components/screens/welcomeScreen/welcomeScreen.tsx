import { Layout } from '../../layout.tsx';
import { Button } from '../../../ui-kit/button.tsx';
import { MutableRefObject } from 'react';
import styles from './welcomeScreen.module.scss';

type TWelcomeScreenProps = {
  videoRef: MutableRefObject<HTMLVideoElement | null>;
};

export const WelcomeScreen = ({ videoRef }: TWelcomeScreenProps) => {
  return (
    <Layout videoSrc={'IMG_8964.MP4'} videoRef={videoRef}>
      <h1>Welcome to GREEK JOURNEY!</h1>
      <p>Click on the links to learn more</p>
      <div className={styles.buttonsGreed}>
        <Button onClick={() => alert('Hello!')}>⚡️ Mythology</Button>
        <Button onClick={() => alert('Hello!')}>🎶 Music</Button>
        <Button onClick={() => alert('Hello!')}>🧩 Pazzzzzle</Button>
        <Button onClick={() => alert('Hello!')}>📚 Education</Button>
      </div>
    </Layout>
  );
};
