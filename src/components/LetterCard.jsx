function LetterCard(props) {
  return (
    <div
      class="bg-white rounded-lg shadow-md p-4 flex items-center justify-center cursor-pointer text-4xl font-bold text-purple-600 h-24 sm:h-32 md:h-40 hover:shadow-xl transition duration-300"
      onClick={props.onClick}
    >
      {props.letter}
    </div>
  );
}

export default LetterCard;