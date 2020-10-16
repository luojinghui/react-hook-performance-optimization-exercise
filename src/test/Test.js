import React from "react";

const ComponentButton = React.memo(({ handleClick }) => {
  const refCount = React.useRef(0);

  return (
    <button onClick={handleClick}>
      button render count: {refCount.current++}
    </button>
  );
});

const ComponentText = React.memo(() => {
  return <div>ComponentText</div>;
});

const ComponentData = React.memo(
  ({ data }) => {
    return data.map((item) => {
      return <div key={item}>{item}</div>;
    });
  },
  (prevProsp, nextProps) => {
    return true;
  }
);

const Test = () => {
  const [status, setStatus] = React.useState(false);
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 数组被重新赋值
  const handleClick = React.useCallback(() => setStatus((nextState) => {
    return !nextState;
  }), []);

  return (
    <div className="App">
      <h2>{status ? "on" : "off"}</h2>
      {/* 组件会被重新渲染 */}
      <ComponentButton handleClick={handleClick} />

      {/* test组件会重新渲染 */}
      <ComponentText />

      {/* 组件会被重新渲染，当当前组件状态发生变化时 */}
      <ComponentData data={data} />
    </div>
  );
};

export default Test;
