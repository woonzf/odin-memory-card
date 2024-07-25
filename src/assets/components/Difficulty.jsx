import { getDifficultyList } from "../modules/game";

function Difficulty({ onClick }) {
  const difficultyList = getDifficultyList();

  return (
    <div className="h-full w-full p-4 flex flex-col justify-evenly items-center">
      <big>- Select Difficulty -</big>
      <div className="grid grid-cols-2 gap-[1vh]">
        {difficultyList.map((difficulty) => {
          return (
            <button
              key={difficulty.id}
              className="hover-scale"
              onClick={() => {
                onClick(difficulty.id);
              }}
            >
              {difficulty.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Difficulty;
