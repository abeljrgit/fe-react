import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { TipCalculatorContext } from "./TipCalculatorContext";

function TipCalculatorLeft(props: any) {
  const ctx = useContext(TipCalculatorContext);

  const [isNOPValid, setIsNOPValid] = useState(true);

  const billRef: any = useRef();
  const numPeopleRef: any = useRef();
  let tipPercentageValue: number = 0;
  let tipAmountPerPerson: number = 0;
  let totalPerPerson: number = 0;

  useEffect(() => {
    if (!ctx.isActiveInput) {
      resetLeftSide();
    }
  }, [ctx.isActiveInput]);

  const resetLeftSide = () => {
    makeAllButtonInactive();
    clearCustomValueInput();
    billRef.current.value = "";
    numPeopleRef.current.value = "";
    tipPercentageValue = 0;
    tipAmountPerPerson = 0;
  };

  const makeAllButtonInactive = () => {
    document.querySelectorAll(".tc__tip-btn").forEach((btnElement) => {
      btnElement.classList.remove("tc__tip-btn--active");
    });
  };

  const clearCustomValueInput = () => {
    const customTip: any = document.querySelector(".tc__tip-input input");
    customTip.value = "";
  };

  const getTipPercentage = (e: any) => {
    if (e.currentTarget.dataset.multiplier) {
      makeAllButtonInactive();
      clearCustomValueInput();
      e.currentTarget.classList.add("tc__tip-btn--active");
      tipPercentageValue = e.currentTarget.dataset.multiplier;
    } else if (e.currentTarget.dataset.custom) {
      makeAllButtonInactive();
      tipPercentageValue = e.currentTarget.value / 100;
    }
  };

  const doCalculation = (e: any) => {
    // Get tip percentage
    getTipPercentage(e);

    // Check if user is currently setting the value then set the reset button active or not
    if (billRef.current.value || numPeopleRef.current.value || tipPercentageValue) {
      props.setActive(true);
    } else {
      props.setActive(false);
    }
    // console.log(billRef.current.value, numPeopleRef.current.value, tipPercentageValue);

    if (numPeopleRef.current.value) {
      tipAmountPerPerson = (+billRef.current.value * +tipPercentageValue) / +numPeopleRef.current.value;
      totalPerPerson = (+billRef.current.value + billRef.current.value * +tipPercentageValue) / +numPeopleRef.current.value;
      props.setResult(tipAmountPerPerson, totalPerPerson);
      setIsNOPValid(true);
    } else {
      setIsNOPValid(false);
    }
  };

  return (
    <div className="tc__left">
      <div className="tc__bill">
        <div className="tc__bill-label">
          <span>Bill</span>
        </div>
        <div className="tc__bill-input">
          <input type="number" placeholder="0" onClick={doCalculation} onFocus={doCalculation} onChange={doCalculation} ref={billRef} />
        </div>
      </div>
      <div className="tc__tip">
        <div className="tc__tip-label">Select Tip %</div>
        <div className="tc__tip-wrapper">
          <div className="tc__tip-btn tc__tip-box" onClick={doCalculation} data-multiplier={0.05}>
            5%
          </div>
          <div className="tc__tip-btn tc__tip-box" onClick={doCalculation} data-multiplier={0.1}>
            10%
          </div>
          <div className="tc__tip-btn tc__tip-box" onClick={doCalculation} data-multiplier={0.15}>
            15%
          </div>
          <div className="tc__tip-btn tc__tip-box" onClick={doCalculation} data-multiplier={0.25}>
            25%
          </div>
          <div className="tc__tip-btn tc__tip-box" onClick={doCalculation} data-multiplier={0.5}>
            50%
          </div>
          <div className="tc__tip-input tc__tip-box">
            <input type="number" placeholder="Custom" onClick={doCalculation} onFocus={doCalculation} onChange={doCalculation} data-custom="Dummy Value" />
          </div>
        </div>
      </div>
      <div className="tc__people">
        <div className={`tc__people-label ${isNOPValid ? "" : "tc__people-label--error"}`}>
          <span>Number of People</span>
          <span>Can't be zero</span>
        </div>
        <div className={`tc__people-input ${isNOPValid ? "" : "tc__people-input--error"}`}>
          <input type="number" placeholder="0" onClick={doCalculation} onFocus={doCalculation} onChange={doCalculation} ref={numPeopleRef} />
        </div>
      </div>
    </div>
  );
}

export default TipCalculatorLeft;
