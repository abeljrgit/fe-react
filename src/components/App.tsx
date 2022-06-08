import "./App.scss";
import iconCalculator from "../img/icon-calculator.svg";
import iconKarma from "../img/icon-karma.svg";
import iconSupervisor from "../img/icon-supervisor.svg";
import iconTeamBuilding from "../img/icon-team-builder.svg";
import FeatureCard from "./FeatureCard";

function App() {
  return (
    <section className="App">
      <div className="features__header">
        <h2>Reliable, efficient delivery</h2>
        <h1>Powered by Technology</h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>
      <div className="features__cards">
        <div className="features__cards-col">
          <FeatureCard
            className="fc--cyan"
            fcTitle="Supervisor"
            fcDescription="Monitors activity to identify project roadblocks"
            fcIcon={iconSupervisor}
          />
        </div>
        <div className="features__cards-col">
          <FeatureCard
            className="fc--red"
            fcTitle="Team Builder"
            fcDescription="Scans our talent network to create the optimal team for
            your project"
            fcIcon={iconTeamBuilding}
          />
          <FeatureCard
            className="fc--orange"
            fcTitle="Karma"
            fcDescription="Regularly evaluates our talent to ensure quality"
            fcIcon={iconKarma}
          />
        </div>
        <div className="features__cards-col">
          <FeatureCard
            className="fc--blue"
            fcTitle="Calculator"
            fcDescription="Uses data from past projects to provide better delivery
            estimates"
            fcIcon={iconCalculator}
          />
        </div>
      </div>
    </section>
  );
}

export default App;
