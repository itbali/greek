import { WelcomeScreen } from './components/screens/welcomeScreen/welcomeScreen.tsx';
import { useRef, useState } from 'react';
import { Button } from './ui-kit/button.tsx';
import styles from './app.module.scss';

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleStartClick = () => {
    setIsStarted(true);
    videoRef.current?.play();
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  return (
    <>
      {isStarted ? (
        <WelcomeScreen videoRef={videoRef} />
      ) : (
        <div className={styles.root}>
          <Button onClick={handleStartClick}>Start</Button>
        </div>
      )}
    </>
  );
}

export default App;
