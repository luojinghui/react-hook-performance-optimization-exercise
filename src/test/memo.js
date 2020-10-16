import React from "react";

const MyComponent = ({ myprops }) => {
  const refCount = React.useRef(0);

  refCount.current++;

  return (
    <p>
      {myprops}, Ref Count: {refCount.current}
    </p>
  );
};

const MemorizeMyComponent = React.memo(MyComponent);

const MemoDemo = () => {
  const [state, setState] = React.useState("");

  const handleSetState = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="App">
      <input type="text" value={state} onChange={handleSetState} />

      <MyComponent myprops="MyComponent" />
      <MemorizeMyComponent
        myprops="MemorizeMyComponent"

        // handleSetState={handleSetState}
        data={{ a: 1 }}
      />
    </div>
  );
};

export default MemoDemo;
