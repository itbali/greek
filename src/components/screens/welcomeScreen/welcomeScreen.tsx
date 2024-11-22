import { Layout } from '../../layout.tsx';
import { Button } from '../../../ui-kit/button/button.tsx';
import { TScreenProps } from '../TScreenProps.ts';
import { useDispatch } from 'react-redux';
import { setCurrentPage, TAvailablePages } from '../../../store/store.ts';
import styles from './welcomeScreen.module.scss';

export const WelcomeScreen = ({ videoRef }: TScreenProps) => {
  const dispatch = useDispatch();

  const setPage = (page: TAvailablePages) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Layout videoSrc={'IMG_8964.MP4'} videoRef={videoRef}>
      <h1>Welcome to GREEK JOURNEY!</h1>
      <p>Click on the links to learn more</p>
      <div className={styles.buttonsGreed}>
        <Button onClick={() => setPage('mythology')}>⚡️ Mythology</Button>
        <Button onClick={() => alert('Hello!')}>🎶 Music</Button>
        <Button onClick={() => alert('Hello!')}>🧩 Puzzzzzle</Button>
        <Button onClick={() => alert('Hello!')}>📚 Education</Button>
      </div>
    </Layout>
  );
};
