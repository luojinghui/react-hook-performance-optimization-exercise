import React from "react";
import MemoDemo from "./test/memo";
import UseCallbackMemo from "./test/useCallbackMemo";
import UseCallbackTest from "./test/useCallbackTest";
import UseCallbackReducer from "./test/useCallbackReducer";
import UseMemoDemo from "./test/useMemoDemo";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <MemoDemo></MemoDemo> */}

        {/* <UseCallbackMemo></UseCallbackMemo> */}

        <UseCallbackTest></UseCallbackTest>

        {/* <UseCallbackReducer></UseCallbackReducer> */}

        {/* <UseMemoDemo></UseMemoDemo> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
