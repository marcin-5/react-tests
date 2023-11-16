import { RandomUser } from "components/RandomUser/RandomUser";
import { Calculator } from "components/calculator";
import s from "./App.module.css";

export function App() {
  return (
    <div className={s.root}>
      {/* <Calculator defaultA={0} defaultB={0} defaultOperator={"+"} /> */}
      <RandomUser />
    </div>
  );
}
