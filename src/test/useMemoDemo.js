import React from "react";

const MyComponentWithoutUseMemo = () => {
  const refCount = React.useRef(0);
  const myfunction = () => {
    refCount.current++;

    return 1;
  };
  const value = myfunction();

  return <p>MyComponent without useMemo. Ref count: {refCount.current}</p>;
};

const MyComponentMemo = ({ value }) => {
  return <p>MyComponent without useMemo. {value}</p>;
};

const UseMemoDemo = () => {
  const [state, setState] = React.useState("");
  const [val, setVal] = React.useState(Date.now());

  const handleSetState = (e) => {
    setState(e.target.value);
  };

  const newValue = "Value:" + val + Math.ceil(Math.random() * 1000);

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleSetState} />
      <MyComponentWithoutUseMemo />

      <MyComponentMemo value={newValue} />
      <button
        onClick={() => {
          setVal(Date.now());
        }}
      >
        change val
      </button>
    </div>
  );
};

export default UseMemoDemo;
