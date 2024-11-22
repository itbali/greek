import { Welcome } from './components/screens/welcome/welcome.tsx';
import { useEffect, useRef } from 'react';
import { Button } from './ui-kit/button/button.tsx';
import styles from './app.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, setCurrentPage } from './store/store.ts';
import { Mythology } from './components/screens/mythology/mythology.tsx';
import Puzzle from './components/screens/puzzle/puzzle.tsx';

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

  useEffect(() => {
    //hack to prevent pull to refresh
    document.body.addEventListener('touchmove', (e) => e.preventDefault(), {
      passive: false
    });
  }, []);

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

  if (currentPage === 'puzzle') {
    return <Puzzle videoRef={videoRef} />;
  }

  return <Welcome videoRef={videoRef} />;
}

export default App;
