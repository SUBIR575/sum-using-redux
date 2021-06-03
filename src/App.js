import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { firstNum, secondNum } from "./action/Action";


const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.addTwoNum.total);
  
  return (
    <div>
      <input
        type="text"
        placeholder="first number"
        onChange={(e) => {
          dispatch(firstNum(e.target.value));
        }}
      />
      <h2>
        <span>+</span>
      </h2>
      <input
        type="text"
        placeholder="second number"
        onChange={(e) => {
          dispatch(secondNum(e.target.value));
        }}
       />
      <input type='text' value={myState}/>
    </div>
  );
};

export default App;
