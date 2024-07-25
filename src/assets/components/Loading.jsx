function Loading({ difficulty, character }) {
  return (
    <>
      <div className="h-full pb-5 flex flex-col justify-between animate-slide-right z-[99]">
        <div>
          <big>Difficulty: {difficulty.name}</big>
          <div>Cards: {difficulty.card}</div>
        </div>
        <small>{character.name}</small>
      </div>
      <div className="text-large self-end">
        <big className="flex">
          <div className="animate-bounce">Now&nbsp;</div>
          <div className="animate-bounce-200">Loading&nbsp;</div>
          <div className="animate-bounce-400">...</div>
        </big>
      </div>
    </>
  );
}

export default Loading;
