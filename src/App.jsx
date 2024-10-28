import { createSignal } from 'solid-js';
import { lettersData } from './lettersData';
import LetterCard from './components/LetterCard';
import LetterDetail from './components/LetterDetail';

function App() {
  const [currentLetterIndex, setCurrentLetterIndex] = createSignal(null);

  const showLetterDetail = (index) => {
    setCurrentLetterIndex(index);
  };

  const nextLetter = () => {
    setCurrentLetterIndex((prev) => (prev + 1) % lettersData.length);
  };

  const prevLetter = () => {
    setCurrentLetterIndex((prev) =>
      prev === 0 ? lettersData.length - 1 : prev - 1
    );
  };

  const goHome = () => {
    setCurrentLetterIndex(null);
  };

  return (
    <div class="min-h-screen h-full flex items-center justify-center p-4">
      {currentLetterIndex() === null ? (
        <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">
          {lettersData.map((letter, index) => (
            <LetterCard
              letter={letter.letter}
              onClick={() => showLetterDetail(index)}
            />
          ))}
        </div>
      ) : (
        <LetterDetail
          letterData={lettersData[currentLetterIndex()]}
          onNext={nextLetter}
          onPrev={prevLetter}
          onHome={goHome}
        />
      )}
    </div>
  );
}

export default App;