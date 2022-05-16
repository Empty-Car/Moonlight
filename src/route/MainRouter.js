import { Routes, Route } from "react-router-dom";
import Header from "../component/Header/Header";
import {
  MainContainer,
  SigninContainer,
  MeditationContainer,
  CentersListContainer,
  EmotionDiaryContainer,
} from "../container";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="*" element={<SubRouter />} />
    </Routes>
  );
};

const SubRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SigninContainer />}></Route>
        <Route path="/main" element={<MainContainer />}></Route>
        <Route path="/meditation" element={<MeditationContainer />}></Route>
        <Route
          path="/record-emotion"
          element={<EmotionDiaryContainer />}
        ></Route>
        <Route path="/centers" element={<CentersListContainer />}></Route>
      </Routes>
    </>
  );
};

export default MainRouter;
