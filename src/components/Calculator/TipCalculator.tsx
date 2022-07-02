import { useState } from "react";
import { TipCalculatorContext } from "./TipCalculatorContext";
import TipCalculatorLeft from "./TipCalculatorLeft";
import TipCalculatorRight from "./TipCalculatorRight";

function TipCalculator() {
  const [tap, setTap] = useState(0.0);
  const [tp, setTp] = useState(0.0);
  const [isActiveInput, setIsActiveInput] = useState(false);

  const applyResult = (setTapVal: number, setTpVal: number) => {
    setTap(setTapVal);
    setTp(setTpVal);
  };

  return (
    <div className="tc">
      <TipCalculatorContext.Provider value={{ tap, tp, isActiveInput }}>
        <TipCalculatorLeft setResult={applyResult} setActive={setIsActiveInput} />
        <TipCalculatorRight setResult={applyResult} setActive={setIsActiveInput} />
      </TipCalculatorContext.Provider>
    </div>
  );
}

export default TipCalculator;
