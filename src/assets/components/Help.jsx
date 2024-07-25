function Help({ onClick }) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-[1vh] relative">
      <button
        className="absolute top-5 right-5 hover-scale shadow-pokedarkblue"
        onClick={onClick}
      >
        <big>X</big>
      </button>
      <div className="text-large">
        <big>How to play?</big>
      </div>
      <div className="text-center">Don&apos;t pick the same card twice!</div>
    </div>
  );
}

export default Help;
