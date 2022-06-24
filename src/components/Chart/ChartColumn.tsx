import { useState } from "react";

function ChartColumn(props: any) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const multiplier: number = 1.75;

  return (
    <div className="chart__column">
      <div
        className={`chart__bar ` + props.className}
        style={{ height: props.amount * multiplier + `px` }}
      >
        &nbsp;
        <div className="chart__bar-amount-box">{props.amount}</div>
      </div>
      <span className="chart__text">{props.day}</span>
    </div>
  );
}

export default ChartColumn;
