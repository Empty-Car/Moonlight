import React from "react";
import RootRouter from "./route/RootRouter";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <RootRouter />;
    </RecoilRoot>
  );
};

export default App;
