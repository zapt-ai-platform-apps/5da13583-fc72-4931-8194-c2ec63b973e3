import { createSignal, Show, For } from 'solid-js';

const letters = [
  { letter: 'أ', word: 'أسد', image: 'https://example.com/lion.png' },
  { letter: 'ب', word: 'بقرة', image: 'https://example.com/cow.png' },
  { letter: 'ت', word: 'تفاح', image: 'https://example.com/apple.png' },
  { letter: 'ث', word: 'ثعلب', image: 'https://example.com/fox.png' },
  { letter: 'ج', word: 'جمل', image: 'https://example.com/camel.png' },
  { letter: 'ح', word: 'حصان', image: 'https://example.com/horse.png' },
  { letter: 'خ', word: 'خروف', image: 'https://example.com/sheep.png' },
  { letter: 'د', word: 'دب', image: 'https://example.com/bear.png' },
  { letter: 'ذ', word: 'ذئب', image: 'https://example.com/wolf.png' },
  { letter: 'ر', word: 'رجل', image: 'https://example.com/man.png' },
  { letter: 'ز', word: 'زرافة', image: 'https://example.com/giraffe.png' },
  { letter: 'س', word: 'سمكة', image: 'https://example.com/fish.png' },
  { letter: 'ش', word: 'شجرة', image: 'https://example.com/tree.png' },
  { letter: 'ص', word: 'صقر', image: 'https://example.com/falcon.png' },
  { letter: 'ض', word: 'ضفدع', image: 'https://example.com/frog.png' },
  { letter: 'ط', word: 'طائرة', image: 'https://example.com/airplane.png' },
  { letter: 'ظ', word: 'ظبي', image: 'https://example.com/gazelle.png' },
  { letter: 'ع', word: 'عين', image: 'https://example.com/eye.png' },
  { letter: 'غ', word: 'غزال', image: 'https://example.com/deer.png' },
  { letter: 'ف', word: 'فيل', image: 'https://example.com/elephant.png' },
  { letter: 'ق', word: 'قمر', image: 'https://example.com/moon.png' },
  { letter: 'ك', word: 'كتاب', image: 'https://example.com/book.png' },
  { letter: 'ل', word: 'ليمون', image: 'https://example.com/lemon.png' },
  { letter: 'م', word: 'منزل', image: 'https://example.com/house.png' },
  { letter: 'ن', word: 'نمر', image: 'https://example.com/tiger.png' },
  { letter: 'ه', word: 'هدهد', image: 'https://example.com/hoopoe.png' },
  { letter: 'و', word: 'ورد', image: 'https://example.com/rose.png' },
  { letter: 'ي', word: 'يد', image: 'https://example.com/hand.png' },
];

function App() {
  const [selectedLetter, setSelectedLetter] = createSignal(null);

  return (
    <div class="h-full bg-gradient-to-br from-blue-100 to-green-100 p-4">
      <h1 class="text-4xl font-bold text-center text-green-700 mb-8">تعليم الحروف الهجائية للأطفال</h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <For each={letters}>
          {(item) => (
            <button
              class="bg-white rounded-lg shadow-md p-4 text-2xl font-bold text-green-700 hover:bg-green-200 cursor-pointer"
              onClick={() => setSelectedLetter(item)}
            >
              {item.letter}
            </button>
          )}
        </For>
      </div>
      <Show when={selectedLetter()}>
        <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div class="bg-white rounded-lg p-8 max-w-sm mx-auto text-center">
            <h2 class="text-3xl font-bold mb-4 text-green-700">{selectedLetter().letter}</h2>
            <p class="text-2xl mb-4">{selectedLetter().word}</p>
            <img src={selectedLetter().image} alt={selectedLetter().word} class="w-full h-auto mb-4" />
            <button
              class="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
              onClick={() => setSelectedLetter(null)}
            >
              إغلاق
            </button>
          </div>
        </div>
      </Show>
    </div>
  );
}

export default App;