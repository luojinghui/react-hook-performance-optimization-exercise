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

const MyComponentMemo = React.memo(({ value }) => {
  return <p>MyComponent without useMemo. {value}</p>;
});

const UseMemoDemo = () => {
  const [state, setState] = React.useState("");
  const [val, setVal] = React.useState(Date.now());

  const handleSetState = (e) => {
    setState(e.target.value);
  };

  // 这里使用useMemo缓存值
  const newValue = React.useMemo(
    () => "Value:" + val + Math.ceil(Math.random() * 1000),
    [val]
  );

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
