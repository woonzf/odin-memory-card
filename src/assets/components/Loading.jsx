function Loading({ difficulty, character }) {
  return (
    <>
      <div className="h-full flex flex-col justify-between animate-slide-right z-[99]">
        <div>
          <div>Difficulty: {difficulty.name}</div>
          <small>Cards: {difficulty.card}</small>
        </div>
        {typeof character === "object" && <small>{character.name}</small>}
      </div>
      <big className="self-end flex">
        <div className="animate-bounce">Now&nbsp;</div>
        <div className="animate-bounce-200">Loading&nbsp;</div>
        <div className="animate-bounce-400">...</div>
      </big>
    </>
  );
}

export default Loading;
