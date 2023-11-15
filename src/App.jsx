import { Calculator } from "components/calculator";
import s from "./App.module.css";
export function App() {
  return (
    <div className={s.root}>
      <Calculator defaultA={2} defaultB={17.1} defaultOperator={"-"} />
    </div>
  );
}
