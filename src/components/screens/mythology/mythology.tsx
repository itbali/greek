import { Layout } from '../../layout.tsx';
import { Button } from '../../../ui-kit/button/button.tsx';
import { TScreenProps } from '../TScreenProps.ts';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../store/store.ts';
import { useEffect, useState } from 'react';
import Input from '../../../ui-kit/input/input.tsx';

export const Mythology = ({ videoRef }: TScreenProps) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(setCurrentPage('home'));
  };

  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <Layout videoSrc={'IMG_8970.MOV'} videoRef={videoRef} withGoBackButton>
      <h1>Welcome to GREEK JOURNEY!</h1>
      <p>Click on the links to learn more</p>
      <div>
        <Button onClick={goBack}>Go home</Button>
        <Input value={text} onChange={setText} />
      </div>
    </Layout>
  );
};
