import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { MdPause, MdPlayArrow } from "react-icons/md";
import { useAudio } from "../hooks/useAudio";
import backgroundMusic from "../asset/audio/background_music.mp3";
import Logo from "../asset/img/logo.svg";

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  height: 60px;
  padding: 1rem;
  background: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 20px gray;

  z-index: 1;
`;

const LogoStyle = styled.img`
  width: 109px;
  height: 41px;
  cursor: pointer;
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

const NavigateButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: white;
  font-size: 15px;
  font-weight: bold;

  margin-right: 40px;
`;

const Header = () => {
  const [playing, setPlaying] = useAudio(backgroundMusic);

  const onClick = () => {
    setPlaying();
  };

  return (
    <HeaderBox>
      <NavLink to="main">
        <LogoStyle src={Logo}></LogoStyle>
      </NavLink>
      <div>
        <MusicPlayer onClick={onClick}>
          {playing ? (
            <MdPause size={50} color="#F8A6A6" />
          ) : (
            <MdPlayArrow size={50} color="#F8A6A6" />
          )}
        </MusicPlayer>
      </div>
      <div>
        <NavLink
          to="meditation"
          activestyle={{
            borderBottom: "3px solid #f8a6a6",
          }}
        >
          <NavigateButton>명상</NavigateButton>
        </NavLink>
        <NavLink
          to="record-emotion"
          activestyle={{
            borderBottom: "3px solid #f8a6a6",
          }}
        >
          <NavigateButton>감정 일기</NavigateButton>
        </NavLink>
        <NavLink
          to="reminisce"
          activestyle={{
            borderBottom: "3px solid #f8a6a6",
          }}
        >
          <NavigateButton>정신건강복지센터</NavigateButton>
        </NavLink>
      </div>
    </HeaderBox>
  );
};

export default Header;
