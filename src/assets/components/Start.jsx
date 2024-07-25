function Start({ onClick }) {
  return (
    <div className="w-full flex justify-center">
      <div className="animate-start">
        <button className="hover-scale" onClick={onClick}>
          <div className="animate-bounce">
            <big>Start</big>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Start;
