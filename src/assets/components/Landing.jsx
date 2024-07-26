function Landing({ onClick }) {
  return (
    <button className="h-full w-full flex justify-center" onClick={onClick}>
      <div className="h-full w-full max-w-screen-xl flex flex-col">
        <div className="h-[43%] flex justify-center items-end">
          <div className="h-[50%] px-4 flex flex-col justify-end gap-[5vh]">
            <big>A memory card game inspired by Pokémon...</big>
            <small>
              This game is not associated with The Pokémon Company in any way.
              It is developed solely for the purpose of learning. I do not take
              credit for any of the names, graphics, sounds and musics used. All
              credits belong to their rightful owners.
            </small>
          </div>
        </div>
        <div className="h-[31%] w-full mt-[26vh] flex flex-col justify-center">
          <div>Click Anywhere</div>
          <div>To Continue...</div>
        </div>
      </div>
    </button>
  );
}

export default Landing;
