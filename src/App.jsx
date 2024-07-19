import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import "./App.css";

function App() {
  const [play, setPlay] = useState(0);
  const [start, setStart] = useState(0);

  function handleStartChange() {
    setStart(+!start);
  }

  return (
    <>
      {play === 0 && (
        <button
          className="h-full w-full relative"
          onClick={() => {
            setPlay(1);
          }}
        >
          <div className="text-white text-2xl lg:text-5xl flex justify-center absolute top-[82%] left-1/2 -translate-x-1/2">
            <div className="animate-bounce">Press Anywhere</div>
          </div>
        </button>
      )}
      {play === 1 && (
        <div className="h-full w-full max-w-screen-xl">
          {start === 0 && <StartScreen onDifficultyClick={handleStartChange} />}
        </div>
      )}
    </>
  );
}

export default App;
