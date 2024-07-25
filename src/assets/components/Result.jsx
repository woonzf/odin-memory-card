function Result({
  state,
  difficulty,
  onReplay,
  onChangeDifficulty,
  character,
}) {
  return (
    <>
      <big className="z-[99]">
        {state === 5 && `You defeated ${character.name}!`}
        {state === 6 && "You lost!"}
      </big>
      <div className="w-full flex justify-evenly z-[99]">
        <button
          className="hover-scale shadow-pokedarkblue"
          onClick={() => {
            onReplay(difficulty.id);
          }}
        >
          {state === 5 && "Replay"}
          {state === 6 && "Retry"}
        </button>
        <button
          className="hover-scale shadow-pokedarkblue"
          onClick={onChangeDifficulty}
        >
          Change Difficulty
        </button>
      </div>
    </>
  );
}

export default Result;
