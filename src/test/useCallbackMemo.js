import React from "react";

const MyComponent = React.memo((props) => {
  const refCount = React.useRef(0);
  refCount.current++;

  const callback = props.useCallback ? "useCallback" : "without useCallback";

  return (
    <p>
      MyComponent {callback}. Ref Count: {refCount.current}.
    </p>
  );
});

const equals = (a, b) => {
  return a === b ? "Equal" : "Different";
};

const UseCallbackMemo = () => {
  const [state, setState] = React.useState("");
  const [someArg, setSomeArg] = React.useState("");

  const handleSomethingUseCallback = React.useCallback(() => {}, [someArg]);
  const handleSomething = (e) => {
    setState(e.target.value);
  };

  const handleSetState = (e) => {
    setState(e.target.value);
  };

  const refHandleSomethingUseCallback = React.useRef(
    handleSomethingUseCallback
  );

  const refHandleSomething = React.useRef(handleSomething);

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleSetState} />

      <p>
        handleSomethingUseCallback:{" "}
        {equals(
          refHandleSomethingUseCallback.current,
          handleSomethingUseCallback
        )}
      </p>

      <p>
        handleSomething: {equals(refHandleSomething.current, handleSomething)}
      </p>

      <MyComponent
        handleSomething={handleSomethingUseCallback}
        useCallback={true}
      />

      <MyComponent handleSomething={handleSomething} useCallback={false} />
    </div>
  );
};

export default UseCallbackMemo;
