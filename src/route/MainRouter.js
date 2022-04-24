import { Routes, Route } from "react-router-dom";
import {
  MainContainer,
  MeditationContainer,
  ReminisceContainer,
  RecordEmotionContainer,
} from "../container";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContainer />}></Route>
      <Route path="/meditation" element={<MeditationContainer />}></Route>
      <Route
        path="/record-emotion"
        element={<RecordEmotionContainer />}
      ></Route>
      <Route path="/reminisce" element={<ReminisceContainer />}></Route>
    </Routes>
  );
};

export default MainRouter;
