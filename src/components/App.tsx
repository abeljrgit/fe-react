import "./App.scss";
import Intro from "./Intro";
import Form from "./Form";

function App() {
  return (
    <section className="App">
      <div className="App__container">
        <div className="App__wrapper">
          <Intro />
          <Form />
        </div>
      </div>
    </section>
  );
}

export default App;
