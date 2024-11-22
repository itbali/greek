import { Layout } from '../../layout.tsx';
import { TScreenProps } from '../TScreenProps.ts';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css';

const Puzzle = ({ videoRef }: TScreenProps) => {
  return (
    <Layout videoRef={videoRef} videoSrc={'IMG_8970.MOV'} withGoBackButton>
      <JigsawPuzzle
        imageSrc={'https://s1.significados.com/foto/zeus-og.jpg?class=ogImageWide'}
        rows={2}
        columns={3}
        onSolved={() => alert('Zeus!')}
      />
    </Layout>
  );
};

export default Puzzle;
