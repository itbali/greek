import { WelcomeScreen } from './components/screens/welcomeScreen/welcomeScreen.tsx';
import { useRef } from 'react';
import { Button } from './ui-kit/button/button.tsx';
import styles from './app.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, setCurrentPage } from './store/store.ts';
import { Mythology } from './components/screens/mythology/mythology.tsx';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();

  const handleStartClick = () => {
    dispatch(setCurrentPage('home'));
    videoRef.current?.play();
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  if (currentPage === 'welcome') {
    return (
      <div className={styles.root}>
        <Button onClick={handleStartClick}>Start</Button>
      </div>
    );
  }

  if (currentPage === 'mythology') {
    return <Mythology videoRef={videoRef} />;
  }

  return <WelcomeScreen videoRef={videoRef} />;
}

export default App;
