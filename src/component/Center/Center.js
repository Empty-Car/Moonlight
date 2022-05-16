import * as S from "./styles"

const Center = ({ centerName, location, phonecall }) => {
  const regex = / /gi;
  const d = centerName.replace(regex, "+");
  const href = `https://www.google.com/search?q=${d}`;

  return (
    <S.CenterInfoBox>
      <S.SearchLink href={href} target="_blank">
        {centerName}
      </S.SearchLink>
      <div>{location}</div>
      <div>{phonecall}</div>
    </S.CenterInfoBox>
  );
};

export default Center;
