import { data } from "./data/data";

import { useState } from "react";

import BmiCalc from "./components/BmiCalc";
import BmiTable from "./components/BmiTable";

import "./App.css";

function App() {
  const calcBmi = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const bmiResult = (weightFloat / (heightFloat * heightFloat)).toFixed(2);

    setBmi(bmiResult);

    data.forEach((item) => {
      if (bmiResult >= item.min && bmiResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
    
    if(!info)return;
  };

  const [bmi, setBmi] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!bmi ? (
        <BmiCalc calcBmi={calcBmi} />
      ) : (
        <BmiTable data={data} bmi={bmi} info={info} infoClass={infoClass} />
      )}
    </div>
  );
}

export default App;
