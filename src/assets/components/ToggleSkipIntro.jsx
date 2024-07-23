import { skipBGMStart } from "./music";

function ToggleSkipIntro({ onClick }) {
  return (
    <button
      className="text-2xl lg:text-4xl hover-scale absolute top-5 right-5"
      onClick={() => {
        skipBGMStart();
        onClick();
      }}
    >
      Skip
    </button>
  );
}

export default ToggleSkipIntro;
