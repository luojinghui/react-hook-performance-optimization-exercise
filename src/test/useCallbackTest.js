import React from "react";

const Button = ({ handleClick }) => {
  const refCount = React.useRef(0);

  return (
    <button onClick={handleClick}>
      button render count: {refCount.current++}
    </button>
  );
};

const UseCallbackTest = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <div className="App">
      <h2>{isOn ? "on" : "off"}</h2>

      <Button
        handleClick={() => {
          setIsOn(!isOn);
        }}
      ></Button>
    </div>
  );
};

export default UseCallbackTest;
