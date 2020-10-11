import React, { useReducer, useCallback, useRef } from "react";

const Button = React.memo(({ handleClick, text }) => {
  const refCount = useRef(0);

  return (
    <button onClick={handleClick}>
      {`${text}`}
      <span className={"renderCount"}>
        self render count {refCount.current++}
      </span>
    </button>
  );
});

function UseCallbackReducer() {
  const [numA, setNumA] = React.useState(0);
  const handlePlusAClick = React.useCallback(
    () => setNumA((prevNumA) => prevNumA + 1),
    []
  );
  const [numB, setNumB] = React.useState(0);
  const handlePlusBClick = React.useCallback(
    () => setNumB((prevNumB) => prevNumB + 1),
    []
  );
  const [result, setResult] = React.useState(null);
  const handleAPlusB = React.useCallback(() => setResult(numA + numB), [
    numA,
    numB,
  ]);

  return (
    <div className="App">
      <div className="num">NumA: {numA}</div>
      <Button text={"+"} handleClick={handlePlusAClick} />
      <div className="num">NumB: {numB}</div>
      <Button text={"+"} handleClick={handlePlusBClick} />
      <div className="num">Result: {result}</div>
      <Button text={"A + B"} handleClick={handleAPlusB} />
    </div>
  );
}

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "INCREASE_A":
//       return {
//         ...state,
//         numA: state.numA + 1,
//       };
//     case "INCREASE_B":
//       return {
//         ...state,
//         numB: state.numB + 1,
//       };
//     case "A_PLUS_B":
//       return {
//         ...state,
//         result: state.numA + state.numB,
//       };
//     default:
//       return state;
//   }
// };

// function UseCallbackReducer() {
//   const [{ numA, numB, result }, dispatch] = useReducer(reducer, {
//     numA: 0,
//     numB: 0,
//     result: null,
//   });
//   const handlePlusAClick = useCallback(() => dispatch({ type: "INCREASE_A" }), [
//     dispatch,
//   ]);
//   const handlePlusBClick = useCallback(() => dispatch({ type: "INCREASE_B" }), [
//     dispatch,
//   ]);
//   const handleAPlusB = useCallback(() => dispatch({ type: "A_PLUS_B" }), [
//     dispatch,
//   ]);
//   return (
//     <div className="App">
//       <div className={"num"}>NumA: {numA}</div>
//       <Button text={"+"} handleClick={handlePlusAClick} />
//       <div className={"num"}>NumB: {numB}</div>
//       <Button text={"+"} handleClick={handlePlusBClick} />
//       <div className={"num"}>Result: {result}</div>
//       <Button text={"A + B"} handleClick={handleAPlusB} />
//     </div>
//   );
// }

export default UseCallbackReducer;
