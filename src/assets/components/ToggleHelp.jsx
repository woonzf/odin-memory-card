import help from "../icons/help.png";

function ToggleHelp({ onClick }) {
  return (
    <button className="hover-scale" onClick={onClick}>
      <img src={help} alt="Help" />
    </button>
  );
}

export default ToggleHelp;
