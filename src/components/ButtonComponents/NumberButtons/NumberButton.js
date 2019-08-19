import React, { useState } from "react";

const NumberButton = ({ number, buttonClass }) => {
  return (
    <>
      {buttonClass === "zero" ? (
        <button
          // onClick={() => props.concatNum(props.number)}
          className="button zero"
        >
          {number}
        </button>
      ) : (
        <button
          className="button number"
          // onClick={() => props.concatNum(props.number)}
        >
          {number}
        </button>
      )}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default NumberButton;
