function ToggleHelp({ onClick }) {
  return (
    <button
      className="h-[50px] aspect-square overflow-hidden hover-scale"
      onClick={onClick}
    >
      <div className="mt-[7px] text-white text-[50px] leading-none">?</div>
    </button>
  );
}

export default ToggleHelp;
