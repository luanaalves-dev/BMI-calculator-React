import "./BmiTable.css";

import Button from "./Button";

const BmiTable = ({ data, bmi, info, infoClass }) => {
  return (
    <div id="result-container">
      <p id="bmi-number">
        Your BMI: <span className={infoClass}>{bmi}</span>
      </p>
      <p id="bmi-info">
        Current status: <span className={infoClass}>{info}</span>
      </p>
      <h3>Check out the rankings:</h3>
      <div id="bmi-table">
        <div className="table-header">
          <h4>BMI</h4>
          <h4>Ranking</h4>
          <h4>Obesity</h4>
        </div>
        {data.map((item) => (
          <div className="table-data" key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>
          </div>
        ))}
      </div>
      <Button id={"back-btn"} text={"Back"} />
    </div>
  );
};

export default BmiTable;
