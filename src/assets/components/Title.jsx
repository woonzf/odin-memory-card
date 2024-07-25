function Title({ isFirstTime }) {
  return (
    <div className="h-fit overflow-hidden">
      <div
        className={
          "flex flex-col " +
          (isFirstTime ? "animate-logo translate-y-full" : "")
        }
        id="title"
      >
        <div className="px-3 py-5">
          <div
            className="text-[calc(1rem+2vh+2vw)] flex items-center"
            id="logo-memory-card"
          >
            <big>Poké&nbsp;</big>
            <small>
              <div>Memory</div>
              <div>Card</div>
            </small>
          </div>
        </div>
        <small className="text-end">a TOP project</small>
      </div>
    </div>
  );
}

export default Title;
