import expLogo from "../../img/logo.svg";
import ChartColumn from "./ChartColumn";
import chartData from "../../dev-data/data.json";

function Chart() {
  const getMaxValue = (cd: any) => {
    let tempVal: number = 0;
    let tempIndex: number = 0;

    cd.map((data: any, i: number) => {
      if (tempVal <= data.amount) {
        tempVal = data.amount;
        tempIndex = i;
      }
    });

    return [tempVal, tempIndex];
  };
  const [_, highestValIndex] = getMaxValue(chartData);

  const chartColumns = chartData.map((data, i: number) => {
    if (highestValIndex === i) {
      return (
        <ChartColumn
          className="chart__bar--highlighted"
          day={data.day}
          amount={data.amount}
          key={i}
        />
      );
    } else {
      return <ChartColumn day={data.day} amount={data.amount} key={i} />;
    }
  });

  return (
    <div className="exp">
      <div className="exp__balance">
        <div className="exp__balance-text">
          <span>My balance</span>
          <span>$921.48</span>
        </div>
        <div className="exp__balance-logo">
          <img src={expLogo} alt="Logo" />
        </div>
      </div>

      <div className="exp__chart">
        <h1 className="exp__chart-title">Spending - Last 7 days</h1>
        <div className="exp__chart-diagram">{chartColumns}</div>
        <div className="exp__total">
          <div className="exp__total-left">
            <h2>Total this month</h2>
            <span>$478.33</span>
          </div>
          <div className="exp__total-right">
            <span>+2.4%</span>
            <h3>from last month</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
