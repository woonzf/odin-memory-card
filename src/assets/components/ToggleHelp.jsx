function ToggleHelp({ onClick }) {
  return (
    <button
      className="h-[50px] aspect-square overflow-hidden hover-scale"
      onClick={onClick}
    >
      <div className="text-[50px]">?</div>
    </button>
  );
}

export default ToggleHelp;
