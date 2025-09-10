import { useEffect, useState } from "react";
import {
  MIN_Value,
  MAX_VALUE,
  INTERVAL_INCREMENT,
  INTERVAL_SPEED,
} from "../constant";

function ProgressBar() {
  const [bar, setBar] = useState(MIN_Value);
  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prevBarVal) => {
        if (prevBarVal >= MAX_VALUE) {
          clearInterval(interval);
        }
        return Math.min(prevBarVal + INTERVAL_INCREMENT, MAX_VALUE);
      });
    }, INTERVAL_SPEED); 
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div
        style={{ width: `${(bar / MAX_VALUE) * 100}%` }}
        className="progress"
      ></div>
    </div>
  );
}

export default ProgressBar;
