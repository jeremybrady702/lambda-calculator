import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";
//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state
  const [oneThree] = useState(numbers.slice(0, 3));
  const [fourSix] = useState(numbers.slice(3, 6));
  const [sevenNine] = useState(numbers.slice(6, 9));
  const [zeroRow] = useState(numbers.slice(9));
  return (
    <>
      <div>
        <div className="row oneThree">
          {oneThree.map((number, index) => (
            <NumberButton
              key={index}
              text={number}
              // concatNumber={props.concatNumber}
            />
          ))}
        </div>
        <div className="row fourSix">
          {fourSix.map((number, index) => (
            <NumberButton
              key={index}
              text={number}
              // concatNumber={props.concatNumber}
            />
          ))}
        </div>
        <div className="row sevenNine">
          {sevenNine.map((number, index) => (
            <NumberButton
              key={index}
              text={number}
              // concatNumber={props.concatNumber}
            />
          ))}
        </div>
        <div className="row zeroRow">
          {zeroRow.map((number, index) =>
            index === 0 ? (
              <NumberButton key={index} text={number} buttonClass={"zero"} />
            ) : (
              <NumberButton key={index}  text={number} buttonClass={"reg"} />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Numbers;
