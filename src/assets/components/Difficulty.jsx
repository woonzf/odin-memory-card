import { getDifficultyList } from "../modules/game";

function Difficulty({ onClick }) {
  const difficultyList = getDifficultyList();

  return (
    <div className="h-full w-full p-4 text-3xl lg:text-5xl flex flex-col justify-evenly items-center">
      <div>- Select Difficulty -</div>
      <div className="grid grid-cols-2 gap-[1vh]">
        {difficultyList.map((difficulty) => {
          return (
            <button
              key={difficulty.id}
              className="btn-difficulty hover-scale"
              onClick={onClick}
              id={difficulty.id}
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
