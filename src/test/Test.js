import React from "react";

const ComponentButton = ({ handleClick }) => {
  const refCount = React.useRef(0);

  return (
    <button onClick={handleClick}>
      button render count: {refCount.current++}
    </button>
  );
};

const ComponentText = () => {
  return <div>ComponentA</div>;
};

const ComponentData = ({ data }) => {
  return data.map((item) => {
    return <div key={item}>{item}</div>;
  });
};

const Test = () => {
  const [status, setStatus] = React.useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleClick = () => setStatus(!status);

  return (
    <div className="App">
      <h2>{status ? "on" : "off"}</h2>

      <ComponentButton handleClick={handleClick} />

      <ComponentText />

      <ComponentData data={data} />
    </div>
  );
};

export default Test;
