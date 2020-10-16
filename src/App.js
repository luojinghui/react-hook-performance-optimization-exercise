import React from "react";
import MemoDemo from "./test/memo";
import UseCallbackMemo from "./test/useCallbackMemo";
import Test from "./test/Test";
import UseCallbackReducer from "./test/useCallbackReducer";
import UseMemoDemo from "./test/useMemoDemo";
import ProviderDemo from "./test/providerDemo";
import UseCallbackTest from "./test/singleProps";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        {/* <Test></Test> */}

        {/* <MemoDemo></MemoDemo> */}

        {/* <UseCallbackMemo></UseCallbackMemo> */}

        {/* <UseCallbackReducer></UseCallbackReducer> */}

        {/* <UseMemoDemo></UseMemoDemo> */}

        <ProviderDemo></ProviderDemo>

        {/* <UseCallbackTest></UseCallbackTest> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
