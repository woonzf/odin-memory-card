function Character({ difficulty, character }) {
  return (
    <div className="h-full flex absolute top-0 right-0 animate-slide-left">
      {difficulty.id === 0 ? (
        <div className="text-[20vh]">?</div>
      ) : (
        <img className={"h-full self-end opacity-90"} src={character.sprite} />
      )}
    </div>
  );
}

export default Character;
