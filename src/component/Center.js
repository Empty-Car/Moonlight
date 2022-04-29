import styled from "styled-components";

const CenterInfoBox = styled.div`
  display: flex;
  justify-content: space-around;

  border: 1px solid black;
  padding: 15px 10px 15px 10px;
  margin-top: 15px;
`;

const SearchLink = styled.a`
  text-decoration: none;
  text-align: left;
`;

const Center = ({ centerName, location, phonecall }) => {
  const regex = / /gi;
  const d = centerName.replace(regex, "+");
  const href = `https://www.google.com/search?q=${d}`;

  return (
    <CenterInfoBox>
      <SearchLink href={href} target="_blank">
        {centerName}
      </SearchLink>
      <div>{location}</div>
      <div>{phonecall}</div>
    </CenterInfoBox>
  );
};

export default Center;
