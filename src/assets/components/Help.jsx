function Help({ onClick }) {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-[1vh] relative">
      <button
        className="absolute top-5 right-5 hover-scale shadow-pokedarkblue"
        onClick={onClick}
      >
        X
      </button>
      <big>How to play?</big>
      <small className="text-center">Don't pick the same card twice!</small>
    </div>
  );
}

export default Help;
