import { useEffect, useRef } from "react";
import { useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState({
    hour: "",
    minute: "",
    second: "",
  });

  const [isRunning, setIsRunning] = useState(false);
  const intervalRef =  useRef(null);

  const handleChange = (e, field) => {
    const value = parseInt(e.target.value, 10) || 0;

    const copyTime = { ...time };
    copyTime[field] = value;
    copyTime.minute += Math.floor(copyTime.second / 60);
    copyTime.second = copyTime.second % 60;
    copyTime.hour += Math.floor(copyTime.minute / 60);
    copyTime.minute = copyTime.minute % 60;
    setTime(copyTime);
    console.log(value, field);
  };

  const handleStart = () => {
     if (
        time.hour.length === 0 &&
        time.minute.length === 0 &&
        time.second.length === 0
      )
        return;
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false)
    setTime({
    hour: "",
    minute: "",
    second: "",
  })
  };

  useEffect(() => {
    if (isRunning) {
     
     intervalRef.current = setInterval(() => {
        setTime((prevtime) => {
          const copyPrevTime = { ...prevtime };
          copyPrevTime.second--;

          if (copyPrevTime.second < 0) {
            copyPrevTime.minute--;
            copyPrevTime.second = 59;
            if (copyPrevTime.minute < 0) {
              copyPrevTime.hour--;
              copyPrevTime.minute = 59;
              if (copyPrevTime.hour < 0) {
                clearInterval(intervalRef.current);
                return {
                  hour: "",
                  minute: "",
                  second: "",
                };
              }
            }
          }

          return copyPrevTime;
        });

        
      }, 1000);
    }
        return () => {
          clearInterval(intervalRef.current);
        };
  }, [isRunning]);

  return (
    <div className="container">
      <div className="input-container">
        <input
          disabled ={isRunning}
          type="text"
          value={time.hour}
          onChange={(e) => handleChange(e, "hour")}
          placeholder="HH"
        />
        <input
          type="text"
          disabled ={isRunning}
          value={time.minute}
          onChange={(e) => handleChange(e, "minute")}
          placeholder="MM"
        />
        <input
          type="text"
          disabled ={isRunning}
          value={time.second}
          onChange={(e) => handleChange(e, "second")}
          placeholder="SS"
        />
      </div>
      <div className="btn-container">
        <button onClick={handleStart}>{isRunning ? "Pause" : "Start"}</button>
        <span> </span>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
