import { Layout } from '../../layout.tsx';
import { TScreenProps } from '../TScreenProps.ts';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';
import styles from './puzzle.module.scss';

const Puzzle = ({ videoRef }: TScreenProps) => {
  return (
    <Layout videoRef={videoRef} videoSrc={'IMG_8970.MOV'} className={styles.root} withGoBackButton>
      <JigsawPuzzle
        imageSrc={
          'https://static.wixstatic.com/media/af1176_a00c4952a9124c5993c21010707a31bc~mv2.jpg/v1/crop/x_0,y_90,w_1792,h_2082/fill/w_560,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IMG_9329.jpg'
        }
        rows={3}
        columns={2}
        onSolved={() => alert('Zeus!')}
      />
    </Layout>
  );
};

export default Puzzle;
