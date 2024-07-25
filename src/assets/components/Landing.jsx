function Landing({ onClick }) {
  return (
    <button className="h-full w-full flex justify-center" onClick={onClick}>
      <div className="h-full w-full max-w-screen-xl flex flex-col">
        <div className="h-[43%] flex justify-center items-end">
          <div className="h-[50%] px-4 flex items-center">
            <big>A memory card game inspired by Pokémon...</big>
          </div>
        </div>
        <div className="h-[31%] w-full mt-[26vh] flex flex-col justify-center">
          <div>Press Anywhere</div>
          <div>To Continue...</div>
        </div>
      </div>
    </button>
  );
}

export default Landing;
