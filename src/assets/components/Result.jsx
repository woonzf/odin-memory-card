function Result({ state, difficulty, onReplay, onChangeDifficulty }) {
  return (
    <>
      <div className="z-[99]">
        {state === 5 && `You defeated ${difficulty.name}!`}
        {state === 6 && "You lost!"}
      </div>
      <div className="w-full flex justify-evenly z-[99]">
        <button
          className="hover-scale shadow-pokedarkblue"
          onClick={() => {
            onReplay(difficulty.id);
          }}
        >
          {state === 5 && <small>Replay</small>}
          {state === 6 && <small>Retry</small>}
        </button>
        <button
          className="hover-scale shadow-pokedarkblue"
          onClick={onChangeDifficulty}
        >
          <small>Change Difficulty</small>
        </button>
      </div>
    </>
  );
}

export default Result;
