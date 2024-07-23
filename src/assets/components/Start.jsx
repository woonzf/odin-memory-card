function Start({ onClick }) {
  return (
    <div className="w-full flex justify-center">
      <div className="animate-start">
        <button className="text-3xl lg:text-5xl hover-scale" onClick={onClick}>
          <div className="animate-bounce">Start</div>
        </button>
      </div>
    </div>
  );
}

export default Start;
