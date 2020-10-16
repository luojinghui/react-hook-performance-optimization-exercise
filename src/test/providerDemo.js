import React, { useContext, useState } from "react";

const redTheme = {
  color: "red",
};
const greenTheme = {
  color: "green",
};

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [theme, switchTheme] = useState(redTheme);
  const value = React.useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
}

const Header = () => {
  const refCount = React.useRef(0);

  refCount.current++;

  return (
    <>
      <h1>Header {refCount.current}</h1>
    </>
  );
};

const Content = React.memo(() => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 style={theme}>Content</h1>
      <button onClick={() => switchTheme(redTheme)}>Red Theme</button>
      <button onClick={() => switchTheme(greenTheme)}>Green Theme</button>
    </>
  );
});

const ProviderDemo = () => {
  const [theme, switchTheme] = useState(redTheme);
  const value = React.useMemo(() => ({ theme, switchTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
};

export default ProviderDemo;
