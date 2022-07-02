import "./App.scss";
import TipCalculator from "./Calculator/TipCalculator";

function App() {
  return (
    <section className="App">
      <div className="App__container">
        <div className="App__wrapper">
          <TipCalculator />
        </div>
      </div>
    </section>
  );
}

export default App;
