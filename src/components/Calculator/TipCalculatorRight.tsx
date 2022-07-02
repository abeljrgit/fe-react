import { useContext } from "react";
import { TipCalculatorContext } from "./TipCalculatorContext";

function TipCalculatorRight(props: any) {
  const ctx = useContext(TipCalculatorContext);

  const resetCalculator = () => {
    props.setResult(0, 0);
    props.setActive(false);
  };

  return (
    <div className="tc__right">
      <div className="tc__amount">
        <div className="tc__amount-text">
          Tip Amount <span>/ person</span>
        </div>
        <div className="tc__amount-number">${ctx.tap.toFixed(2)}</div>
      </div>
      <div className="tc__total">
        <div className="tc__total-text">
          Total <span>/ person</span>
        </div>
        <div className="tc__total-number">${ctx.tp.toFixed(2)}</div>
      </div>
      <div className={`tc__reset ${ctx.isActiveInput ? "tc__reset--active" : ""}`} onClick={resetCalculator}>
        RESET
      </div>
    </div>
  );
}

export default TipCalculatorRight;
