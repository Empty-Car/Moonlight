import styled from "styled-components";
import { useAudio } from "../hooks/useAudio";
import backgroundMusic from "../background_music.mp3";
import { MdPause, MdPlayArrow } from "react-icons/md";

const MainBox = styled.div`
  padding-top: 100px;
  /* background-color: black;
  height: 500px;
  width: 100%; */
`;

const MusicPlayer = styled.div`
  cursor: pointer;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Slogan = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-weight: bold;
`;

const Main = () => {
  const [playing, setPlaying] = useAudio(backgroundMusic);

  const onClick = () => {
    setPlaying();
  };

  return (
    <MainBox>
      <Slogan>
        <div>Lean On Us</div>
      </Slogan>
      <MusicPlayer onClick={onClick}>
        {playing ? (
          <MdPause size={150} color="#F8A6A6" />
        ) : (
          <MdPlayArrow size={150} color="#F8A6A6" />
        )}
      </MusicPlayer>
    </MainBox>
  );
};

export default Main;
