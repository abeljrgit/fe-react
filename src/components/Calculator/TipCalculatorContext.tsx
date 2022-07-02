import { createContext } from "react";

export const TipCalculatorContext = createContext({
  tap: 0.0,
  tp: 0.0,
  isActiveInput: false,
});
