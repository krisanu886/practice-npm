import React, { useState } from "react";
import './App.css';

const Quotes = () => {
  const [get, setGet] = useState();
  const Quote = require("inspirational-quotes");
  //   const get = Quote.getRandomQuote();
  const Refresh = () => {
      setGet(Quote.getRandomQuote());
      
  };
//   setInterval(Quote, 2000);
  return (
    <>
      <div className="div">
        <h1> {get}</h1>
        <button onClick={Refresh}>Click Here!!!</button>
      </div>
    </>
  );
};
export default Quotes;
