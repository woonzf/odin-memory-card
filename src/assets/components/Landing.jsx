import { setBGM } from "../modules/music";

function Landing({ onClick }) {
  function handleClick() {
    setBGM(0);
    onClick();
  }

  return (
    <button
      className="h-full w-full text-2xl lg:text-5xl text-white flex justify-center"
      onClick={handleClick}
    >
      <div className="h-full w-full max-w-screen-xl flex flex-col">
        <div className="h-[43%] flex justify-center items-end">
          <div className="h-[50%] px-4 flex items-center">
            A memory card game inspired by Pokémon...
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
