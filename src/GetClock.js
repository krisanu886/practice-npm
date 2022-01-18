import React, { useState, useEffect } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";
import './App.css';

const GetClock = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="div">
      <p>Current time:</p>
      {/* <div className="watch"> */}
        <Clock className={'watch'} value={value} />
      {/* </div> */}
    </div>
  );
};
export default GetClock;
