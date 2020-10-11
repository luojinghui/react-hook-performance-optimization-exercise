import React from "react";

const Item = ({ item }) => {
  return <>{item.data}</>;
};

const UseCallbackTest = () => {
  const [list, setList] = React.useState([
    { data: 1, id: 1 },
    { data: 2, id: 2 },
    { data: 3, id: 3 },
  ]);
  const { activeId } = React.useState(1);

  return (
    <div className="App">
      {list.map((item) => (
        <Item key={item.id} item activeId={activeId}></Item>
      ))}
    </div>
  );
};

export default UseCallbackTest;
