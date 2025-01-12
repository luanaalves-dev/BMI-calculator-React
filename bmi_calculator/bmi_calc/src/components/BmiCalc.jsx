import "./BmiCalc.css";
import Button from "./Button";

const BmiCalc = () => {
  return (
    <div id="calc-container">
      <h2>BMI Calculator</h2>
      <form id="bmi-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Height:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemple 1.75"
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Weight:</label>
            <input
              type="text"
              name=" weight"
              id="weight"
              placeholder="Exemple 70.5"
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calculate" />
          <Button id="clear-btn" text="Clear" />
        </div>
      </form>
    </div>
  );
};

export default BmiCalc;
