function Character({ character }) {
  return (
    <div className="h-full flex absolute top-0 right-0 animate-slide-left">
      <img className={"h-full self-end object-cover"} src={character.sprite} />
    </div>
  );
}

export default Character;
