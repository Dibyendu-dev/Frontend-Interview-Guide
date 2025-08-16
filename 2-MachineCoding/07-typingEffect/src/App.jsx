import "./App.css";
import TypingEffect from "./components/TypingEffect";

function App() {
  return (
    <>
      <h2>Typing Effect</h2>
      <div>
        <TypingEffect text={"Hi, I'm Dibyendu Das ."} delay={250} />
      </div>
    </>
  );
}

export default App;
