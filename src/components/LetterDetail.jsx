import { createEffect } from 'solid-js';

function LetterDetail(props) {
  createEffect(() => {
    const utteranceLetter = new SpeechSynthesisUtterance(props.letterData.letter);
    const utteranceWord = new SpeechSynthesisUtterance(props.letterData.word);
    utteranceLetter.lang = 'ar-SA';
    utteranceWord.lang = 'ar-SA';
    speechSynthesis.speak(utteranceLetter);
    speechSynthesis.speak(utteranceWord);
  });

  const playSound = () => {
    const utteranceLetter = new SpeechSynthesisUtterance(props.letterData.letter);
    const utteranceWord = new SpeechSynthesisUtterance(props.letterData.word);
    utteranceLetter.lang = 'ar-SA';
    utteranceWord.lang = 'ar-SA';
    speechSynthesis.speak(utteranceLetter);
    speechSynthesis.speak(utteranceWord);
  };

  return (
    <div class="text-center">
      <div class="mb-4">
        <h1 class="text-6xl font-bold text-purple-600">{props.letterData.letter}</h1>
        <p class="text-2xl text-gray-700 mt-2">{props.letterData.word}</p>
      </div>
      <div class="mb-4">
        <img
          src={props.letterData.image}
          alt={props.letterData.word}
          class="w-64 h-64 mx-auto rounded-lg shadow-md"
        />
      </div>
      <div class="flex justify-center space-x-4">
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          onClick={props.onPrev}
        >
          السابق
        </button>
        <button
          class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
          onClick={playSound}
        >
          استمع
        </button>
        <button
          class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 cursor-pointer"
          onClick={props.onNext}
        >
          التالي
        </button>
      </div>
      <button
        class="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer"
        onClick={props.onHome}
      >
        العودة إلى القائمة
      </button>
    </div>
  );
}

export default LetterDetail;