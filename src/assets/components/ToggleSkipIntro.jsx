import { skipBGMStart } from "../modules/music";

function ToggleSkipIntro({ onClick }) {
  return (
    <button
      className="hover-scale absolute top-5 right-5"
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
