import styled from "styled-components";
import { useAudio } from "../hooks/useAudio";
import backgroundMusic from "../background_music.mp3";
import { MdPause, MdPlayArrow } from "react-icons/md";

const MainBox = styled.div`
  padding-top: 100px;
`;

const Main = () => {
  const [playing, setPlaying] = useAudio(backgroundMusic);

  const onClick = () => {
    setPlaying();
  };

  return (
    <MainBox>
      {playing ? (
        <div onClick={onClick}>
          <MdPause />
        </div>
      ) : (
        <div onClick={onClick}>
          <MdPlayArrow />
        </div>
      )}
    </MainBox>
  );
};

export default Main;
