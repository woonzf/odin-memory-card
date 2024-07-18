import { useState } from "react";
import StartScreen from "./assets/components/StartScreen";
import "./App.css";

function App() {
  const [start, setStart] = useState(0);

  return <>{start === 0 && <StartScreen onClick={() => setStart(1)} />}</>;
}

export default App;
