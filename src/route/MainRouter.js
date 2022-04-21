import { Routes, Route } from "react-router-dom";
import { MainContainer, MeditationContainer } from "../container";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}></Route>
      <Route path="/meditation" element={<MeditationContainer />}></Route>
    </Routes>
  );
};

export default MainRouter;
